import {beforeEach, afterEach, expect, test, vi} from 'vitest';
import Map from 'ol/Map';
import {store} from '../../js/util';
import WebGl from '../../js/layer/WebGL';
import {featureCollection, source} from '../feature';
import create from '../../js/layer/challenge';
import style from '../../js/layer/style/challenge';
import * as html from '../../js/feature/html';

const spy = vi.spyOn(html, 'updateChallengeButtons');

afterEach(() => {
  store('map', undefined);
  localStorage.removeItem('challenges');
});

test('create - restore=false', () => {
  expect.assertions(3);

  const layer = create(false);

  expect(layer).toBeInstanceOf(WebGl);
  expect(layer.getSource().getFeatures().length).toBe(0);
  expect(layer.getStyle()).toBe(style);
});

test('create - restore=true', () => {
  expect.assertions(3);

  localStorage.setItem('challenges', JSON.stringify(featureCollection));

  const layer = create(true);

  expect(layer).toBeInstanceOf(WebGl);
  expect(layer.getStyle()).toBe(style);
  expect(layer.getSource().getFeatures().length).toBe(3);
});

test('create - add/removefeature', () => {
  expect.assertions(2);

  const map = new Map();
  store('map', map);

  localStorage.setItem('challenges', JSON.stringify(featureCollection));

  const layer = create(false);
  map.set('challenge', layer);

  const challengeSource = layer.getSource();
  const feature = source.getFeatures()[0];

  challengeSource.addFeature(feature);
  expect(spy).toBeCalledTimes(1);

  challengeSource.removeFeature(feature);
  expect(spy).toBeCalledTimes(2);
});
