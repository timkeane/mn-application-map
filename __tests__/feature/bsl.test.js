import $ from 'jquery';
import {afterEach, expect, test} from 'vitest';
import {source} from '../feature';
import {store} from '../../js/util';
import featureHtml from '../../js/feature/bsl';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Map from 'ol/Map';

const layer = new VectorLayer({source: new VectorSource()});
const map = new Map();
map.set('challenge', layer);

const feature = source.getFeatureById('bsl-1327378106');

afterEach(() => {
  feature.set('fed_fund', undefined);
  feature.set('state_fund', undefined);
  feature.set('distance', undefined);
  feature.set('challenge', true);
  store('map', undefined);
});

test('featureHtml - challenge=true, distance=0.01, fed_fund=BIP, state=1', () => {
  expect.assertions(3);

  const div = $('<div></div>');
  feature.set('fed_fund', 'BIP');
  feature.set('state_fund', 1);
  feature.set('distance', 0.01 * 1609.34);
  store('map', map);

  const html = featureHtml(feature, 'location');

  expect(html.get(0).id).toBe('location-bsl-1327378106');
  expect(html.get(0).className).toBe('feature-html bsl location served y');
  expect(div.html(html).html()).toBe(`<div id="location-bsl-1327378106" class="feature-html bsl location served y"><h4 class="focus-ring" tabindex="0"><span data-i18n="layer.bsl.name"></span></h4><div class="distance" aria-label="0.01 ">0.01 mi</div><address>7727 N MARSHFIELD AVE<br>CHICAGO, <span data-i18n="feature.value.addr_state"></span> 60626</address><div class="location-id"><span class="field" data-i18n="[prepend]feature.field.id">:</span> <span>1327378106</span></div><div class="enfoce"><span class="field" data-i18n="[prepend]feature.field.enforce">:</span> <span data-i18n="feature.value.y"></span></div><div class="fund"><span class="field" data-i18n="[prepend]feature.field.fund">: </span><span class="fed_fund" data-i18n="[prepend]feature.value.bip">, </span><span class="state_fund" data-i18n="feature.value.state_fund"></span></div><div class="service"><span class="field" data-i18n="[prepend]feature.field.service">:</span> <span data-i18n="feature.value.served"></span></div><button type="button" class="btn btn-primary focus-ring providers location" data-bs-toggle="collapse" data-bs-target="#prov-location-bsl-1327378106" aria-expanded="false" data-i18n="btn.providers.name">
  </button><table id="prov-location-bsl-1327378106" class="collapse hide provider location loading">
    <thead>
      <tr><th data-i18n="feature.field.provider">
      </th><th data-i18n="feature.field.tech">
      </th><th data-i18n="feature.field.speed">
    </th></tr></thead>
    <tbody></tbody>
  </table><button class="btn btn-primary focus-ring challenge" data-i18n="btn.remove_challenge.name"></button></div>`);
});

test('featureHtml - challenge=false', () => {
  expect.assertions(3);

  const div = $('<div></div>');
  feature.set('challenge', false);
  store('map', map);

  const html = featureHtml(feature, 'location');

  expect(html.get(0).id).toBe('location-bsl-1327378106');
  expect(html.get(0).className).toBe('feature-html bsl location served y');
  expect(div.html(html).html()).toBe(`<div id="location-bsl-1327378106" class="feature-html bsl location served y"><h4 class="focus-ring" tabindex="0"><span data-i18n="layer.bsl.name"></span></h4><address>7727 N MARSHFIELD AVE<br>CHICAGO, <span data-i18n="feature.value.addr_state"></span> 60626</address><div class="location-id"><span class="field" data-i18n="[prepend]feature.field.id">:</span> <span>1327378106</span></div><div class="enfoce"><span class="field" data-i18n="[prepend]feature.field.enforce">:</span> <span data-i18n="feature.value.y"></span></div><div class="service"><span class="field" data-i18n="[prepend]feature.field.service">:</span> <span data-i18n="feature.value.served"></span></div><button type="button" class="btn btn-primary focus-ring providers location" data-bs-toggle="collapse" data-bs-target="#prov-location-bsl-1327378106" aria-expanded="false" data-i18n="btn.providers.name">
  </button><table id="prov-location-bsl-1327378106" class="collapse hide provider location loading">
    <thead>
      <tr><th data-i18n="feature.field.provider">
      </th><th data-i18n="feature.field.tech">
      </th><th data-i18n="feature.field.speed">
    </th></tr></thead>
    <tbody></tbody>
  </table><button class="btn btn-primary focus-ring challenge" data-i18n="btn.add_challenge.name"></button></div>`);
});
