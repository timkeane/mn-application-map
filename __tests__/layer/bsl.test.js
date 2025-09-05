import {expect, test} from 'vitest';
import WebGl from '../../js/layer/WebGL';
import layer from '../../js/layer/bsl';
import style from '../../js/layer/style/service';
import html from '../../js/feature/bsl';

test('bsl', () => {
  expect.assertions(3);

  expect(layer).toBeInstanceOf(WebGl);
  expect(layer.getStyle()).toBe(style);
  expect(layer.get('featureHtml')).toBe(html);
});