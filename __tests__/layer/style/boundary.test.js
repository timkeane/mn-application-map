import {expect, test} from 'vitest';
import style from '../../../js/layer/style/boundary';

test('boundary', () => {
  expect.assertions(3);

  expect(import.meta.env.VITE_BOUNDARY_STROKE.length).toBeGreaterThan(0);
  expect(style['stroke-color']).toBe(import.meta.env.VITE_BOUNDARY_STROKE);
  expect(style['stroke-width']).toBe(3);
});
