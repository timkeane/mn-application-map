import $ from 'jquery';
import {beforeEach, afterEach, expect, test} from 'vitest';
import Map from 'ol/Map';
import View from 'ol/View';
import {createLists} from '../../js/list/list';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {store} from '../../js/util';
import {source as restoredChallenges} from '../feature';
import caiFeatureHtml from '../../js/feature/cai';
import bslFeatureHtml from '../../js/feature/bsl';

const caiLayer = new VectorLayer({source: new VectorSource()});
const bslLayer = new VectorLayer({source: new VectorSource()});
const challengeLayer = new VectorLayer({source: new VectorSource()});
const view = new View();
const map = new Map({view, layers: [challengeLayer]});
const locationTab = $('<div id="locations"></div>');
const challengeTab = $('<div id="challenges"></div>');
const layout = {
  tabs: {location: locationTab, challenge: challengeTab}
};

caiLayer.set('featureHtml', caiFeatureHtml);
bslLayer.set('featureHtml', bslFeatureHtml);
map.set('cai', caiLayer);
map.set('bsl', bslLayer);
map.set('challenge', challengeLayer);

beforeEach(() => {
  store('map', map);
  $('body').append(locationTab).append(challengeTab);
});

afterEach(() => {
  store('map', undefined);
  $('body').empty();
  locationTab.empty();
  challengeTab.empty();
  challengeLayer.getSource().clear();
});

test('createLists - restore=false', () => {
  expect.assertions(23);

  createLists(layout, false);

  const locationList = locationTab.children().get(0);

  expect(locationTab.children().length).toBe(1);

  expect(locationList.id).toBe('location-list');
  expect(locationList.className).toBe('list-group');

  const challengeForm = challengeTab.children().get(0);
  const challengeList = challengeTab.children().get(1);
  const del = $(challengeForm).find('.delete');
  const table = $(challengeForm).find('.table');
  const save = $(challengeForm).find('.save');
  const open = $(challengeForm).find('.open');
  const submit = $(challengeForm).find('button[type="submit"]').get(0);

  expect(challengeTab.children().length).toBe(2);

  expect(challengeForm.id).toBe('challenge');

  expect(del.get(0).className).toBe('btn btn-primary sm delete');
  expect(del.attr('data-i18n')).toBe('[title]form.challenges.delete;[aria-label]form.challenges.delete');
  expect(del.is(':disabled'));

  expect(table.get(0).className).toBe('btn btn-primary sm table');
  expect(table.attr('data-i18n')).toBe('[title]form.challenges.table;[aria-label]form.challenges.table');
  expect(table.is(':disabled'));

  expect(save.get(0).className).toBe('btn btn-primary sm save');
  expect(save.attr('data-i18n')).toBe('[title]form.challenges.save;[aria-label]form.challenges.save');
  expect(save.is(':disabled'));

  expect(open.get(0).className).toBe('btn btn-primary sm open');
  expect(open.attr('data-i18n')).toBe('[title]form.challenges.open;[aria-label]form.challenges.open');
  expect(open.is(':disabled'));

  expect(submit.className).toBe('btn btn-primary');
  expect($(submit).attr('data-i18n')).toBe('form.challenges.submit');
  expect($(submit).attr('type')).toBe('submit');
  expect($(submit).is(':disabled'));

  expect(challengeList.id).toBe('challenge-list');
  expect(challengeList.className).toBe('list-group');
});

test('createLists - restore=true', () => {
  expect.assertions(6);

  challengeLayer.setSource(restoredChallenges);

  createLists(layout, true);

  const challengeList = challengeTab.find('ul');

  expect(locationTab.children().length).toBe(1);
  expect(challengeTab.children().length).toBe(2);

  expect(challengeList.children().length).toBe(3);

  restoredChallenges.getFeatures().forEach((feature, i) => {
    const li = challengeList.children().get(i);
    const div = $('<div></div>');
    if (feature.getId().indexOf('cai') > -1) {
      expect(li.innerHTML).toBe(div.html(caiFeatureHtml(feature, 'challenge')).html());
    } else {
      expect(li.innerHTML).toBe(div.html(bslFeatureHtml(feature, 'challenge')).html());
    }
  });
});
