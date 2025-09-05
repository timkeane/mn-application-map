import {expect, test} from 'vitest';
import style from '../../../js/layer/style/blockGroup';

test('boundary', () => {
  expect.assertions(5);

  expect(import.meta.env.VITE_BG_STROKE.length).toBeGreaterThan(0);
  expect(import.meta.env.VITE_BG_FILL.length).toBeGreaterThan(0);
  expect(style['fill-color']).toBe(import.meta.env.VITE_BG_FILL);
  expect(style['stroke-color']).toBe(import.meta.env.VITE_BG_STROKE);
  expect(style['stroke-width']).toBe(3);
});
