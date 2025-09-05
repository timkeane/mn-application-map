import {expect, test} from 'vitest';
import style from '../../../js/layer/style/challenge';
import {getIconDataUri} from '../../../js/util';

test('challenge', () => {
  expect.assertions(10);

  expect(style.length).toBe(2);

  expect(import.meta.env.VITE_CHALLENGE_FILL.length).toBeGreaterThan(0);
  expect(import.meta.env.VITE_CHALLENGE_STROKE.length).toBeGreaterThan(0);
  expect(style[0]['circle-fill-color']).toBe(import.meta.env.VITE_CHALLENGE_FILL);
  expect(style[0]['circle-stroke-color']).toBe(import.meta.env.VITE_CHALLENGE_STROKE);
  expect(style[0]['circle-stroke-width']).toBe(3);
  expect(style[0]['circle-radius']).toEqual([
    'interpolate', ['exponential', 2],
    ['zoom'],
    10, 6,
    17, 48
]);

  expect(style[1]['icon-src']).toBe(getIconDataUri('challenge'));
  expect(style[1]['icon-size']).toEqual([48, 48]);
  expect(style[1]['icon-scale']).toEqual([
    'interpolate',
    ['exponential', 2], ['zoom'],
    10, 0.1,
    17, 1
]);

});
