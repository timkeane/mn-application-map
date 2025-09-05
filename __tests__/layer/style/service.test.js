import {expect, test} from 'vitest';
import style from '../../../js/layer/style/service';
import {getIconDataUri} from '../../../js/util';

test('service', () => {
  expect.assertions(13);

  expect(style.length).toBe(3);

  expect(style[0].filter).toEqual(['==', ['get', 'service'], 'SERVED']);
  expect(style[0]['icon-src']).toBe(getIconDataUri('served'));
  expect(style[0]['icon-size']).toEqual([48, 48]);
  expect(style[0]['icon-scale']).toEqual([
    'interpolate',
    ['exponential', 2], ['zoom'],
    10, 0.1,
    17, 1
  ]);

  expect(style[1].filter).toEqual(['==', ['get', 'service'], 'UNDERSERVED']);
  expect(style[1]['icon-src']).toBe(getIconDataUri('underserved'));
  expect(style[1]['icon-size']).toEqual([48, 48]);
  expect(style[1]['icon-scale']).toEqual([
    'interpolate',
    ['exponential', 2], ['zoom'],
    10, 0.1,
    17, 1
  ]);

  expect(style[2].filter).toEqual(['==', ['get', 'service'], 'UNSERVED']);
  expect(style[2]['icon-src']).toBe(getIconDataUri('unserved'));
  expect(style[2]['icon-size']).toEqual([48, 48]);
  expect(style[2]['icon-scale']).toEqual([
    'interpolate',
    ['exponential', 2], ['zoom'],
    10, 0.1,
    17, 1
  ]);
});
