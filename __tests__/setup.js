import $ from 'jquery';
import {vi} from 'vitest';
import basmapStyle from './basemapStyle';

global.bootstrap = {
  Modal: function() {
    return {
      show: vi.fn(),
      hide: vi.fn()
    };
  }
};

global.ResizeObserver = vi.fn(() => {
  return {observe: vi.fn()}
});

global.Worker = vi.fn();

global.URL.createObjectURL = vi.fn();

$.fn.extend({
  localize: function() {return this;}
});

global.fetch = vi.fn(request => {
  const url = request.url.toString();
  if (url.indexOf('style') >= -1) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(basmapStyle)
    });
  } else {
    throw 'unexpected call to fetch';
  }
});
