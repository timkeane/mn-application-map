import $ from 'jquery';
import {beforeEach, afterEach, expect, test, vi} from 'vitest';
import {creatFilters} from '../../js/control/filter';
import Map from 'ol/Map';
import layer from '../../js/layer/bsl';
import {store} from '../../js/util';

const locationTab = $('<div></div>');
const legendEnforce = $('<input class="filter enforce" type="checkbox">')
  .data('where', 'enforceable_commitment = 1');
const legendMdu = $('<input class="filter mdu" type="checkbox">')
  .data('where', 'mdu > 1');

beforeEach(() => {
  $('body')
    .append(locationTab)
    .append(legendEnforce)
    .append(legendMdu);
});

afterEach(() => {
  $('body').empty();
  store('map', undefined);
});

test('creatFilters', () => {
  expect.assertions(42);

  const source = layer.getSource();
  const map = new Map();

  map.addLayer(layer);
  map.set('bsl', layer);
  store('map', map);

  const spy = vi.spyOn(source, 'filter');

  creatFilters(locationTab);

  expect(legendEnforce.is(':checked')).toBe(false);
  expect(legendMdu.is(':checked')).toBe(false);

  const form = locationTab.children().get(0);
  const div0 = $($(form).find('div').get(0));
  const enforce = div0.find('input');
  const div1 = $($(form).find('div').get(1));
  const mdu = div1.find('input');

  expect(locationTab.children().length).toBe(1);

  expect($(form).children().length).toBe(2);
  expect(form.id).toBe('filter');
  expect(form.className).toBe('hidden');

  expect(div0.children().length).toBe(3);
  expect(enforce.attr('id')).toBe('filter-enforce');
  expect(enforce.data('layer')).toBe(layer);
  expect(enforce.is(':checked')).toBe(false);
  expect(enforce.attr('type')).toBe('checkbox');
  expect(enforce.get(0).className).toBe('form-check-input filter enforce list');
  expect(div0.find('img').attr('src')).toBe('img/filter.svg');
  expect(div0.find('img').attr('data-i18n')).toBe('[alt]legend.filter');
  expect(div0.find('label').attr('for')).toBe('filter-enforce');
  expect(div0.find('label').attr('data-i18n')).toBe('feature.field.enforce');

  expect(div1.children().length).toBe(3);
  expect(mdu.data('layer')).toBe(layer);
  expect(mdu.attr('id')).toBe('filter-mdu');
  expect(mdu.is(':checked')).toBe(false);
  expect(mdu.attr('type')).toBe('checkbox');
  expect(mdu.get(0).className).toBe('form-check-input filter mdu list');
  expect(div1.find('img').attr('src')).toBe('img/filter.svg');
  expect(div1.find('img').attr('data-i18n')).toBe('[alt]legend.filter');
  expect(div1.find('label').attr('for')).toBe('filter-mdu');
  expect(div1.find('label').attr('data-i18n')).toBe('feature.field.mdu');


  enforce.prop('checked', true).trigger('change');

  expect(spy).toBeCalledTimes(1);
  expect(spy.mock.calls[0][0]).toBe('enforceable_commitment = 1');
  expect(legendEnforce.is(':checked')).toBe(true);
  expect(legendMdu.is(':checked')).toBe(false);

  mdu.prop('checked', true).trigger('change');

  expect(spy).toBeCalledTimes(2);
  expect(spy.mock.calls[1][0]).toBe('enforceable_commitment = 1 AND mdu > 1');
  expect(legendEnforce.is(':checked')).toBe(true);
  expect(legendMdu.is(':checked')).toBe(true);

  enforce.prop('checked', false).trigger('change');

  expect(spy).toBeCalledTimes(3);
  expect(spy.mock.calls[2][0]).toBe('mdu > 1');
  expect(legendEnforce.is(':checked')).toBe(false);
  expect(legendMdu.is(':checked')).toBe(true);

  mdu.prop('checked', false).trigger('change');

  expect(spy).toBeCalledTimes(4);
  expect(spy.mock.calls[3][0]).toBe('');
  expect(legendEnforce.is(':checked')).toBe(false);
  expect(legendMdu.is(':checked')).toBe(false);
});
