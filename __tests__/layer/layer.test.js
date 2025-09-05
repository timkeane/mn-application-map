import {beforeEach, afterEach, expect, test} from 'vitest';
import addLayers from '../../js/layer/layer';
import WebGl from '../../js/layer/WebGL';
import Map from 'ol/Map';
import {getChallengeSource, store} from '../../js/util';
import {featureCollection} from '../feature';

let map;
beforeEach(() => {
  map = new Map();
  store('map', map);
});

afterEach(() => {
  store('map', undefined);
  localStorage.removeItem('challenges');
});

test('addLayers - retore=false', async () => {
  expect.assertions(9);

  await addLayers(map, false);

  expect(map.getLayers().getArray().length).toBe(9);
  expect(map.get('cai')).toBeInstanceOf(WebGl);
  expect(map.get('bsl')).toBeInstanceOf(WebGl);
  expect(map.get('bg')).toBeInstanceOf(WebGl);
  expect(map.get('challenge')).toBeInstanceOf(WebGl);
  expect(map.get('select')).toBeInstanceOf(WebGl);
  expect(map.get('draw')).toBeInstanceOf(WebGl);
  expect(map.get('boundary')).toBeInstanceOf(WebGl);

  expect(getChallengeSource().getFeatures().length).toBe(0);
});

test('addLayers - retore=false', async () => {
  expect.assertions(9);

  localStorage.setItem('challenges', JSON.stringify(featureCollection));

  await addLayers(map, false);

  expect(map.getLayers().getArray().length).toBe(9);
  expect(map.get('cai')).toBeInstanceOf(WebGl);
  expect(map.get('bsl')).toBeInstanceOf(WebGl);
  expect(map.get('bg')).toBeInstanceOf(WebGl);
  expect(map.get('challenge')).toBeInstanceOf(WebGl);
  expect(map.get('select')).toBeInstanceOf(WebGl);
  expect(map.get('draw')).toBeInstanceOf(WebGl);
  expect(map.get('boundary')).toBeInstanceOf(WebGl);

  expect(getChallengeSource().getFeatures().length).toBe(0);
});
