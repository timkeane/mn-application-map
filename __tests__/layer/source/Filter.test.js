import {expect, test, vi} from 'vitest';
import GeoJSON from 'ol/format/GeoJSON';
import Filter from '../../../js/layer/source/Filter';

test('Filter - filter', () => {
  expect.assertions(5);

  const filterUrl = vi.fn();

  const source = new Filter({
    format: new GeoJSON(),
    url: filterUrl
  });

  expect(source).toBeInstanceOf(Filter);
  expect(source.getUrl()).toBe(filterUrl);

  const setUrl = vi.spyOn(source, 'setUrl');
  source.filter('jack is whak');

  expect(setUrl).toBeCalledTimes(1);

  source.getUrl()('mock-extent', 'mock-resolution', 'mock-projection');

  expect(filterUrl).toBeCalledTimes(1);
  expect(filterUrl).toHaveBeenCalledWith('mock-extent', 'mock-resolution', 'mock-projection', 'jack is whak');
});

test('Filter - loadFeatures', async () => {
  expect.assertions(1);

  const source = new Filter({});
  const handler = vi.fn();

  source.on('loadcomplete', handler);

  function runTest() {
    return new Promise((resolve, reject) => {
      source.loading = true;
      source.loadFeatures('mock-extent', 'mock-resolution', 'mock-projection');
      setTimeout(() => {
        source.loading = false;
        setTimeout(() => {
          expect(handler).toBeCalledTimes(1);
          resolve();
        }, 100);
      }, 200);
    });
  }

  await runTest();
});
