import $ from 'jquery';
import {afterEach, expect, test} from 'vitest';
import {deleteStoredData, getAlwaysLoad, getAsCsv, hasLocalStorage, readCsv, restoreChallenges, restoreLocation, saveAlwaysLoad, storeChallenges, storeLocation} from '../../js/storage/storage';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import {store} from '../../js/util';
import {featureCollection, source as mockChallengeSource, csv as mockChallengeCsv} from '../feature';

afterEach(() => {
  expect.assertions(2);

  $('body').empty();

  store('map', undefined);
  deleteStoredData();

  expect(localStorage.getItem('challenges')).toBeNull();
  expect(localStorage.getItem('location')).toBeNull();
});

test('hasLocalStorage', () => {
  expect.assertions(2);

  expect(hasLocalStorage()).toBe(false);

  localStorage.setItem('challenges', '{"features": ["mock-feature"]}');

  expect(hasLocalStorage()).toBe(true);
});

test('store/restore location', () => {
  expect.assertions(2);

  const mockLocation = {"x": 1, "y": 2};

  expect(restoreLocation()).toBeUndefined();

  storeLocation(mockLocation);

  expect(restoreLocation()).toEqual(mockLocation);
});

test('store/restore challenges', () => {
  expect.assertions(3);

  const mockChallenges = [new Feature({name: 'mock-challenge'})];
  const source = new VectorSource();

  expect(restoreChallenges()).toBeUndefined();

  storeChallenges(mockChallenges);
  restoreChallenges(source);

  expect(source.getFeatures().length).toBe(1);
  expect(source.getFeatures()[0].get('name')).toBe('mock-challenge');
});

test('save/get alwaysLoad', () => {
  expect.assertions(2);

  expect(getAlwaysLoad()).toBe(false);

  saveAlwaysLoad(true);

  expect(getAlwaysLoad()).toBe(true);
});

test('getAsCsv', () => {
  expect.assertions(1);

  store('map', {
    get: prop => {
      if (prop === 'challenge') {
        return {getSource: () => {return mockChallengeSource;}}
      }
    }
  });

  expect(getAsCsv()).toBe(encodeURIComponent(mockChallengeCsv));
});

test('readCsv', async () => {
  expect.assertions(27);

  const source = new VectorSource();
  const csv = mockChallengeCsv;
  const input = document.createElement('INPUT');
  const file = new File([csv], 'chalenge.csv', {type: 'text/csv'});
  const features = featureCollection.features;

  input.setAttribute('type', 'file');
  input.setAttribute('id', 'load-csv');
  input.files.item = i => {return file;};

  store('map', {
    get: prop => {
      if (prop === 'challenge') {
        return {getSource: () => {return source;}}
      }
    }
  });

  readCsv({target: input});

  function runTest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        expect(source.getFeatures().length).toBe(3);
        features.forEach(feature => {
          const id = feature.id;
          const props = feature.properties;
          for (let prop in props) {
            const wet = source.getFeatureById(id).get(prop);
            const dry = props[prop];
            expect(wet == dry).toBe(true);
          }
        });
        resolve();
      }, 100);
    });
  }

  await runTest();
});
