import {expect, test} from 'vitest';
import {storeChunksOfFeatures, getNextChunkOfFeatures} from '../../js/list/chunk';

const mockFeatures = [];
for (let id = 0; id < 12; id++) {
  mockFeatures.push({id});
}

test('chunk', () => {
  expect.assertions(16);

  let nextChunck = getNextChunkOfFeatures();
  expect(nextChunck).toEqual([]);

  storeChunksOfFeatures(mockFeatures, 5);

  nextChunck = getNextChunkOfFeatures();
  expect(nextChunck.length).toBe(5);
  nextChunck.forEach((mockFeature, i) => {
    expect(mockFeature.id).toBe(i);
  });

  nextChunck = getNextChunkOfFeatures();
  expect(nextChunck.length).toBe(5);
  nextChunck.forEach((mockFeature, i) => {
    expect(mockFeature.id).toBe(i + 5);
  });

  nextChunck = getNextChunkOfFeatures();
  expect(nextChunck.length).toBe(2);
  nextChunck.forEach((mockFeature, i) => {
    expect(mockFeature.id).toBe(i + 10);
  });

});