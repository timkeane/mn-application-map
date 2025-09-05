import $ from 'jquery';
import {beforeEach, afterEach, expect, test, vi} from 'vitest';
import {appendProviderHtml} from '../../js/provider/provider';
import {source} from '../feature';
import { bslProviderResponse, providerResponse } from '../provider';
import {getSpeed} from '../../js/util';

const mockFeatureHtml = $('<div></div>');

const env = import.meta.env;
const bslProviderUrl = env.VITE_BSL_PROVIDER_URL;
const providerUrl = env.VITE_PROVIDER_URL;

const fetchMock = vi.fn(url => {
  if (url.indexOf(bslProviderUrl) > -1) {
    return Promise.resolve({
      json: () => Promise.resolve(bslProviderResponse)
    });
  }
  if (url.indexOf(providerUrl) > -1) {
    return Promise.resolve({
      json: () => Promise.resolve(providerResponse)
    });
  }
});

const globalFetch = global.fetch;

beforeEach(() => {
  $('body').append(mockFeatureHtml);
  global.fetch = fetchMock;
});

afterEach(() => {
  $('body').empty();
  mockFeatureHtml.empty();
  global.fetch = globalFetch;
});

test('appendProviderHtml', () => {
  expect.assertions(15);

  const bslFeature = source.getFeatures()[1];

  appendProviderHtml(bslFeature, 'list', mockFeatureHtml);

  const button = mockFeatureHtml.children().get(0);
  const table = mockFeatureHtml.children().get(1);
  const thead = $(table).children().get(0);

  expect(button.tagName).toBe('BUTTON');
  expect(button.type).toBe('button');
  expect(button.className).toBe('btn btn-primary focus-ring providers list');
  expect($(button).attr('data-bs-toggle')).toBe('collapse');
  expect($(button).attr('data-bs-target')).toBe('#prov-list-bsl-1327378106');
  expect($(button).attr('aria-expanded')).toBe('false');
  expect($(button).attr('data-i18n')).toBe('btn.providers.name');

  expect(table.tagName).toBe('TABLE');
  expect(table.id).toBe('prov-list-bsl-1327378106');
  expect(table.className).toBe('collapse hide provider list loading');

  expect($(thead).children().length).toBe(1);

  expect($($(thead).find('th').get(0)).attr('data-i18n')).toBe('feature.field.provider');
  expect($($(thead).find('th').get(1)).attr('data-i18n')).toBe('feature.field.tech');
  expect($($(thead).find('th').get(2)).attr('data-i18n')).toBe('feature.field.speed');
  
  expect($(table).find('tbody').html()).toBe('');
});

test('populate table', async () => {
  expect.assertions(37);

  const bslFeature = source.getFeatures()[1];

  appendProviderHtml(bslFeature, 'list', mockFeatureHtml);

  const button = mockFeatureHtml.children().get(0);
  const tbody = $(mockFeatureHtml.children().get(1)).find('tbody');
  const encodeHtml = $('<span></span>');

  function runTest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        expect(tbody.children().length).toBe(9);
        providerResponse.features.forEach((feature, i) => {
          const props = feature.properties;
          const tds = $(tbody.children().get(i)).find('td');
          expect(tds.length).toBe(3);
          expect(tds.get(0).innerHTML).toBe(encodeHtml.html(props.name).html());
          expect(tds.get(1).innerHTML).toBe(props.tech);
          expect(tds.get(2).innerHTML).toBe(getSpeed(props));
        });
        resolve();
      }, 100);
    });
  }

  $(button).trigger('click');

  await runTest();
});
