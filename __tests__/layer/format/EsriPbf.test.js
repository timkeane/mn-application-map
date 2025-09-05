import {expect, test} from 'vitest';
import fs from 'fs';
import EsriPbf from '../../../js/layer/format/EsriPbf';
import Feature from 'ol/Feature';

test('EsriPbf - readFeature', async () => {
  expect.assertions(3);

  const pbf = fs.readFileSync('__tests__/layer/format/feature.pbf');

  const format = new EsriPbf({
    idPrefix: 'cai-',
    idProp: 'lid'
  });

  expect(format.getType()).toBe('arraybuffer');

  const feature = format.readFeature(pbf);

  expect(feature).toBeInstanceOf(Feature);
  expect(feature.getId()).toBe('cai-17029');
});

test('EsriPbf - readFeatures', async () => {
  expect.assertions(5);

  const pbf = fs.readFileSync('__tests__/layer/format/features.pbf');

  const format = new EsriPbf({
    idPrefix: 'cai-',
    idProp: 'lid'
  });

  expect(format.getType()).toBe('arraybuffer');

  const features = format.readFeatures(pbf);

  expect(features[0]).toBeInstanceOf(Feature);
  expect(features[0].getId()).toBe('cai-17029');
  expect(features[1]).toBeInstanceOf(Feature);
  expect(features[1].getId()).toBe('cai-23091');
});
