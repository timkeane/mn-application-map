import {expect, test, vi} from 'vitest';
import WebGLVectorLayerRenderer from 'ol/renderer/webgl/VectorLayer';
import WebGLVectorLayer from '../../js/layer/WebGL';
import style from '../../js/layer/style/blockGroup';

vi.mock('ol/renderer/webgl/VectorLayer', (layer, options) => {
  return {default: vi.fn()};
});

test('WebGl', () => {
  expect.assertions(4);

  const layer = new WebGLVectorLayer({style});
  const renderer = layer.createRenderer();

  expect(layer.getStyle()).toBe(style);
  expect(renderer).toBeInstanceOf(WebGLVectorLayerRenderer);
  expect(WebGLVectorLayerRenderer).toBeCalledTimes(1);
  expect(WebGLVectorLayerRenderer).toBeCalledWith(layer, {style});
});
