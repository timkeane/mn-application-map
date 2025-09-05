import {expect, test} from 'vitest';
import WebGl from '../../js/layer/WebGL';
import layer from '../../js/layer/cai';
import style from '../../js/layer/style/eligible';
import html from '../../js/feature/cai';

test('cai', () => {
  expect.assertions(3);

  expect(layer).toBeInstanceOf(WebGl);
  expect(layer.getStyle()).toBe(style);
  expect(layer.get('featureHtml')).toBe(html);
});