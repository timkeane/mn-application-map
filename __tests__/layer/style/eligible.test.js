import {expect, test} from 'vitest';
import style from '../../../js/layer/style/eligible';
import {getIconDataUri} from '../../../js/util';

test('eligible', () => {
  expect.assertions(9);

  expect(style.length).toBe(2);

  expect(style[0].filter).toEqual(['==', ['get', 'eligible'], 'Y']);
  expect(style[0]['icon-src']).toBe(getIconDataUri('y-eligible'));
  expect(style[0]['icon-size']).toEqual([48, 48]);
  expect(style[0]['icon-scale']).toEqual([
    'interpolate',
    ['exponential', 2], ['zoom'],
    10, 0.1,
    17, 1
]);

  expect(style[1].filter).toEqual(['==', ['get', 'eligible'], 'N']);
  expect(style[1]['icon-src']).toBe(getIconDataUri('n-eligible'));
  expect(style[1]['icon-size']).toEqual([48, 48]);
  expect(style[1]['icon-scale']).toEqual([
    'interpolate',
    ['exponential', 2], ['zoom'],
    10, 0.1,
    17, 1
]);
});
