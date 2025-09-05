import $ from 'jquery';
import {beforeEach, afterEach, expect, test} from 'vitest';
import {store, getMap, getView, getState, getCaiLayer, getBslLayer, getBgLayer, getChallengeSource, getSelectSource, getDrawLayer, getDrawSource, getPopupOverlay, getLocationOverlay, layerFilter, getChallengeFill, getChallengeStroke, getSelectFill, getSelectStroke, getDrawFill, getDrawStroke, getBgFill, getBgStroke, getBoundaryStroke, isChallenge, getIconDataUri, getParameterizedtUrl, getChallengeTabButton, getTranslate, getSpeed} from '../js/util';
import Feature from 'ol/Feature';
import {getCurrentLanguage} from '../js/i18n/i18n';

const env = import.meta.env;

const svg = {
  challenge: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#111a52" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M6.043 19.496l-1.482 1.505c-2.791-2.201-4.561-5.413-4.561-9.001s1.77-6.8 4.561-9l1.482 1.504c-2.326 1.835-3.804 4.512-3.804 7.496s1.478 5.661 3.804 7.496zm.675-7.496c0-1.791.887-3.397 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.101-2.282-2.707-2.282-4.498zm15.043 0c0-2.984-1.478-5.661-3.804-7.496l1.482-1.504c2.791 2.2 4.561 5.412 4.561 9s-1.77 6.8-4.561 9.001l-1.482-1.505c2.326-1.835 3.804-4.512 3.804-7.496zm-6.761 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.18-4.533-3.04-6l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.397-2.282 4.498zm-3-7.498c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3z"/></svg>',
  served: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#CC0202" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z"/></svg>',
  underserved: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#F7B500" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z"/></svg>',
  unserved: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#008450" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z"/></svg>',
  'y-eligible': '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect fill="#000" x="3" y="3" width="42" height="42"/><rect fill="#fff" x="6" y="6" width="36" height="36"/><rect fill="#008450" x="9" y="9" width="30" height="30"/><path fill="#fff" transform="translate(12, 12)" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>',
  'n-eligible': '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect fill="#000" x="3" y="3" width="42" height="42"/><rect fill="#fff" x="6" y="6" width="36" height="36"/><rect fill="#CC0202" x="9" y="9" width="30" height="30"/><path fill="#fff" transform="translate(13.2, 13.2) scale(0.9 0.9)" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'
};

const features = {
  f0: {getId: () => 'f0'},
  f2: {getId: () => 'f2'}
};

function mockLayer(name) {
  return {
    getSource: () => {
      return {
        source: name,
        getFeatureById: id => {return features[id] || null;}
      };
    }
  }
}

const layers = {
  cai: mockLayer('cai'),
  bsl: mockLayer('bsl'),
  bg: mockLayer('bg'),
  challenge: mockLayer('challenge'),
  select: mockLayer('select'),
  draw: mockLayer('draw')
};

const mockMap = {
  getView: () => {
    return {name: 'mock-view'};
  },
  get: (prop) => {
    return layers[prop] || {name: prop};
  }
};

const mockButton = $('<button id="mock-button"></button>');
const mockChallengeTab = $('<div aria-labelledby="mock-button"></div>');

beforeEach(() => {
  $('body').append(mockButton).append(mockChallengeTab);
});

afterEach(() => {
  $('body').empty();
  store('map', undefined);
  store('challengeTab', undefined);
  store('translate', undefined);
});

test('store and retreive map componments', () => {
  expect.assertions(11);

  store('map', mockMap);

  expect(getMap()).toBe(mockMap);
  expect(getView()).toEqual({name: 'mock-view'});
  expect(getCaiLayer()).toBe(layers.cai);
  expect(getBslLayer()).toBe(layers.bsl);
  expect(getBgLayer()).toBe(layers.bg);
  expect(getChallengeSource().source).toBe('challenge');
  expect(getSelectSource().source).toBe('select');
  expect(getDrawLayer()).toBe(layers.draw);
  expect(getDrawSource().source).toBe('draw');
  expect(getPopupOverlay()).toEqual({name: 'popupOverlay'});
  expect(getLocationOverlay()).toEqual({name: 'locationOverlay'});
});

test('layerFilter', () => {
  expect.assertions(3);

  store('map', mockMap);

  const caiLayer = getCaiLayer();
  const bslLayer = getBslLayer();
  const bgLayer = getBgLayer();

  expect(layerFilter(caiLayer)).toBe(true);
  expect(layerFilter(bslLayer)).toBe(true);
  expect(layerFilter(bgLayer)).toBe(false);
});

test('get props set by vite env vars', () => {
  expect.assertions(20);

  expect(getState()).not.toBeNull();
  expect(getState()).toBe(env.VITE_STATE);

  expect(getChallengeFill()).not.toBeNull();
  expect(getChallengeFill()).toBe(env.VITE_CHALLENGE_FILL);

  expect(getChallengeStroke()).not.toBeNull();
  expect(getChallengeStroke()).toBe(env.VITE_CHALLENGE_STROKE);

  expect(getSelectFill()).not.toBeNull();
  expect(getSelectFill()).toBe(env.VITE_SELECT_FILL);

  expect(getSelectStroke()).not.toBeNull();
  expect(getSelectStroke()).toBe(env.VITE_SELECT_STROKE);

  expect(getDrawFill()).not.toBeNull();
  expect(getDrawFill()).toBe(env.VITE_DRAW_FILL);

  expect(getDrawStroke()).not.toBeNull();
  expect(getDrawStroke()).toBe(env.VITE_DRAW_STROKE);

  expect(getBgFill()).not.toBeNull();
  expect(getBgFill()).toBe(env.VITE_BG_FILL);

  expect(getBgStroke()).not.toBeNull();
  expect(getBgStroke()).toBe(env.VITE_BG_STROKE);

  expect(getBoundaryStroke()).not.toBeNull();
  expect(getBoundaryStroke()).toBe(env.VITE_BOUNDARY_STROKE);
});

test('isChallenge', () => {
  expect.assertions(4);

  store('map', mockMap);

  const f0 = new Feature({challenge: true});
  const f1 = new Feature({challenge: false});
  const f2 = new Feature({challenge: false});
  const f3 = new Feature({challenge: true});

  f0.setId('f0');
  f1.setId('f1');
  f2.setId('f2');
  f3.setId('f3');

  expect(isChallenge(f0)).toBe(true);
  expect(isChallenge(f1)).toBe(false);
  expect(isChallenge(f2)).toBe(true);
  expect(isChallenge(f3)).toBe(true);
});

test('getIconDataUri', () => {
  expect.assertions(6);

  Object.entries(svg).forEach(entry => {
    expect(getIconDataUri(entry[0])).toEqual(`data:image/svg+xml;utf8,${encodeURIComponent(entry[1])}`);
  });
});

test('getParameterizedtUrl', () => {
  expect.assertions(2);

  const url = 'https://snarcgis.com/?';
  const extent = [1, 2, 3, 4];
  const where = 'jack is whak';

  expect(getParameterizedtUrl(url, extent)).toBe('https://snarcgis.com/?&esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A1%2C%22ymin%22%3A2%2C%22xmax%22%3A3%2C%22ymax%22%3A4%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%2C%22latestWkid%22%3A3857%7D%7D&where=1%20%3D%201');
  expect(getParameterizedtUrl(url, extent, where)).toBe('https://snarcgis.com/?&esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A1%2C%22ymin%22%3A2%2C%22xmax%22%3A3%2C%22ymax%22%3A4%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%2C%22latestWkid%22%3A3857%7D%7D&where=jack%20is%20whak');
});

test('getChallengeTabButton', () => {
  expect.assertions(1);

  store('challengeTab', mockChallengeTab);

  expect(getChallengeTabButton()).toStrictEqual(mockButton);
});

test('getTranslate', () => {
  expect.assertions(1);

  store('translate', 'mock-translate');

  expect(getTranslate()).toBe('mock-translate');
});

test('getSpeed', () => {
  expect.assertions(3);

  const props = {max_up: 500, max_down: 1000};
  const up = new Intl.NumberFormat('en').format(props['max_up']);
  const down = new Intl.NumberFormat('en').format(props['max_down']);

  expect(getSpeed(props)).toBe(`<span>${down}</span><span class="division-sym">/</span><span>${up}</span>`);
  expect(getSpeed({max_up: 0})).toBe('<span data-i18n="feature.value.unknown"/>');
  expect(getSpeed({max_down: 0})).toBe('<span data-i18n="feature.value.unknown"/>');
});

