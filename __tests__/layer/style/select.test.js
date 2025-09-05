import {expect, test} from 'vitest';
import {select, draw} from '../../../js/layer/style/select';

test('select', () => {
  expect.assertions(9);

  expect(import.meta.env.VITE_SELECT_FILL.length).toBeGreaterThan(0);
  expect(import.meta.env.VITE_SELECT_STROKE.length).toBeGreaterThan(0);
  expect(select['circle-fill-color']).toBe(import.meta.env.VITE_SELECT_FILL);
  expect(select['circle-stroke-color']).toBe(import.meta.env.VITE_SELECT_STROKE);
  expect(select['circle-stroke-width']).toBe(3);
  expect(select['circle-radius']).toEqual([
    'interpolate', ['exponential', 2],
    ['zoom'],
    10, 6,
    17, 48
  ]);

  expect(draw['fill-color']).toBe(import.meta.env.VITE_DRAW_FILL);
  expect(draw['stroke-color']).toBe(import.meta.env.VITE_DRAW_STROKE);
  expect(draw['stroke-width']).toBe(3);
});
