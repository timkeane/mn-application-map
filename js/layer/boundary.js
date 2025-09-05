import TopoJSON from 'ol/format/TopoJSON';
import VectorSource from 'ol/source/Vector';
import WebGLVectorLayer from './WebGL';
import style from './style/boundary';
import {getState} from '../util';

const source = new VectorSource({
  format: new TopoJSON(),
  url: `data/${getState()}.json`
});

const layer = new WebGLVectorLayer({
  source,
  style,
  minZoom: 2,
  maxZoom: 9
});

layer.set('name', 'boundary');

export default layer;
