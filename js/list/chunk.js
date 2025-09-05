const chunksOfFeatures = {chunks: []};

export function storeChunksOfFeatures(features, max) {
  const size = Math.min(max, Math.ceil(features.length / 2));
  chunksOfFeatures.chunks = Array.from({length: Math.ceil(features.length / size)}, (v, i) =>
    features.slice(i * size, i * size + size)
  );
  chunksOfFeatures.nextChunck = 0;
}

export function getNextChunkOfFeatures() {
  const chunk = chunksOfFeatures.chunks[chunksOfFeatures.nextChunck];
  if (chunk !== undefined) {
    chunksOfFeatures.nextChunck = chunksOfFeatures.nextChunck + 1;
    return chunk;
  }
  return [];
}
