import {expect, test} from 'vitest';
import WebGl from '../../js/layer/WebGL';
import layer from '../../js/layer/boundary';
import style from '../../js/layer/style/boundary';

test('bg', () => {
  expect.assertions(2);

  expect(layer).toBeInstanceOf(WebGl);
  expect(layer.getStyle()).toBe(style);
});