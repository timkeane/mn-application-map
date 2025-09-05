import {expect, test} from 'vitest';
import {select, draw} from '../../js/layer/select';
import WebGl from '../../js/layer/WebGL';
import VectorSource from 'ol/source/Vector';

test('select', () => {
  expect.assertions(6);

  expect(select).toBeInstanceOf(WebGl);
  expect(select.getSource()).toBeInstanceOf(VectorSource);
  expect(select.getMinZoom()).toBe(14);

  expect(draw).toBeInstanceOf(WebGl);
  expect(draw.getSource()).toBeInstanceOf(VectorSource);
  expect(draw.getMinZoom()).toBe(14);
});
