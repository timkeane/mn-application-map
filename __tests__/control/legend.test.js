import $ from 'jquery';
import {beforeEach, afterEach, expect, test, vi} from 'vitest';
import Map from 'ol/Map';
import View from 'ol/View';
import bslLayer from '../../js/layer/bsl';
import caiLayer from '../../js/layer/cai';
import bgLayer from '../../js/layer/blockGroup';
import {store} from '../../js/util';
import {createLegend} from '../../js/control/legend';

const target = $('<div></div>').get(0);
const layersTab = $('<div></div>');
const view = new View({zoom: 6, center: JSON.parse(import.meta.env.VITE_CENTER)});
const map = new Map({target, view, layers: [bgLayer, caiLayer, bslLayer]});
map.set('bg', bgLayer);
map.set('bsl', bslLayer);
map.set('cai', caiLayer);

beforeEach(() => {
  $('body').append(target).append(layersTab);
  store('map', map);
});

afterEach(() => {
  $('body').empty();
  store('map', undefined);
});

test('createLegend', () => {
  expect.assertions(30);

  createLegend(map, layersTab);

  const legend = $('#legend');

  expect(legend.children().length).toBe(1);
  expect(legend.children().get(0).className).toBe('legend-content');

  const cai = $(legend.find('.layer').get(0));
  const bsl = $(legend.find('.layer').get(1));
  const bg = $(legend.find('.layer').get(2));

  expect(cai.children().get(0).id).toBe('cai-check');
  expect(cai.children().get(0).type).toBe('checkbox');
  expect(cai.children().get(0).className).toBe('form-check-input layer-check');
  expect($(cai.children().get(0)).is(':disabled')).toBe(true);
  expect($(cai.children().get(0)).is(':checked')).toBe(true);
  expect(cai.children().get(1).tagName).toBe('H3');
  expect($(cai.children().get(1)).html().trim()).toBe('<label for="cai-check" data-i18n="layer.cai.name"></label>');

  expect(bsl.children().get(0).id).toBe('bsl-check');
  expect(bsl.children().get(0).type).toBe('checkbox');
  expect(bsl.children().get(0).className).toBe('form-check-input layer-check');
  expect($(bsl.children().get(0)).is(':disabled')).toBe(true);
  expect($(bsl.children().get(0)).is(':checked')).toBe(true);
  expect(bsl.children().get(1).tagName).toBe('H3');
  expect($(bsl.children().get(1)).html().trim()).toBe('<label for="bsl-check" data-i18n="layer.bsl.name"></label>');

  expect(bg.attr('aria-hidden')).toBe('true');
  expect(bg.children().get(0).id).toBe('bg-check');
  expect(bg.children().get(0).type).toBe('checkbox');
  expect(bg.children().get(0).className).toBe('form-check-input layer-check');
  expect($(bg.children().get(0)).is(':disabled')).toBe(true);
  expect($(bg.children().get(0)).is(':checked')).toBe(false);
  expect(bg.children().get(1).tagName).toBe('H3');
  expect($(bg.children().get(1)).html().trim()).toBe('<label for="bg-check" data-i18n="layer.bg.name"></label>');

  expect(caiLayer.getVisible()).toBe(true);
  expect(bslLayer.getVisible()).toBe(true);
  expect(bgLayer.getVisible()).toBe(false);

  view.setZoom(15);

  expect($(cai.children().get(0)).is(':disabled')).toBe(false);
  expect($(bsl.children().get(0)).is(':disabled')).toBe(false);
  expect($(bg.children().get(0)).is(':disabled')).toBe(false);

});
