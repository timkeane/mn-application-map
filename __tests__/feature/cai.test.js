import $ from 'jquery';
import {afterEach, expect, test} from 'vitest';
import {source} from '../feature';
import {store} from '../../js/util';
import featureHtml from '../../js/feature/cai';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Map from 'ol/Map';

const layer = new VectorLayer({source: new VectorSource()});
const map = new Map();
map.set('challenge', layer);

const feature = source.getFeatureById('cai-17029');

afterEach(() => {
  feature.set('distance', undefined);
  feature.set('challenge', true);
  store('map', undefined);
});

test('featureHtml - challenge=true, distance=0.01', () => {
  expect.assertions(3);

  const div = $('<div></div>');
  feature.set('distance', 0.01 * 1609.34);
  store('map', map);

  const html = featureHtml(feature, 'location');

  expect(html.get(0).id).toBe('location-cai-17029');
  expect(html.get(0).className).toBe('feature-html cai location n');
  expect(div.html(html).html()).toBe('<div id="location-cai-17029" class="feature-html cai location n"><h4 class="focus-ring" tabindex="0"><span data-i18n="layer.cai.name"></span></h4><div class="distance" aria-label="0.01 ">0.01 mi</div><address>FAMILY MATTERS INC<br>7731 N MARSHFIELD AVE<br>CHICAGO,  60626</address><div class="location-id"><span class="field" data-i18n="[prepend]feature.field.id">:</span> <span>17029</span></div><div class="eligible"><span class="field" data-i18n="[prepend]feature.field.eligible">:</span> <span data-i18n="feature.value.n"></span></div><div class="type"><span class="field" data-i18n="[prepend]feature.field.type">:</span> <span data-i18n="feature.value.c"></span></div><button class="btn btn-primary focus-ring challenge" data-i18n="btn.remove_challenge.name"></button></div>');
});

test('featureHtml - challenge=false', () => {
  expect.assertions(3);

  const div = $('<div></div>');
  feature.set('challenge', false);
  store('map', map);

  const html = featureHtml(feature, 'location');

  expect(html.get(0).id).toBe('location-cai-17029');
  expect(html.get(0).className).toBe('feature-html cai location n');
  expect(div.html(html).html()).toBe('<div id="location-cai-17029" class="feature-html cai location n"><h4 class="focus-ring" tabindex="0"><span data-i18n="layer.cai.name"></span></h4><address>FAMILY MATTERS INC<br>7731 N MARSHFIELD AVE<br>CHICAGO,  60626</address><div class="location-id"><span class="field" data-i18n="[prepend]feature.field.id">:</span> <span>17029</span></div><div class="eligible"><span class="field" data-i18n="[prepend]feature.field.eligible">:</span> <span data-i18n="feature.value.n"></span></div><div class="type"><span class="field" data-i18n="[prepend]feature.field.type">:</span> <span data-i18n="feature.value.c"></span></div><button class="btn btn-primary focus-ring challenge" data-i18n="btn.add_challenge.name"></button></div>');
});
