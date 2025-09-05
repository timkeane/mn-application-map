import VectorSource from 'ol/source/Vector';
import WebGLVectorLayer from './WebGL';
import style from './style/challenge';
import {updateChallengeButtons} from '../feature/html';
import {deleteStoredData, restoreChallenges} from '../storage/storage';

export default function create(restore) {
  const source = new VectorSource();

  if (restore) {
    restoreChallenges(source);
  } else {
    deleteStoredData();
  }

  const layer = new WebGLVectorLayer({
    source,
    style,
    minZoom: 9
  });

  layer.set('name', 'challenge');

  source.on('addfeature', updateChallengeButtons);
  source.on('removefeature', updateChallengeButtons);

  return layer;
}
