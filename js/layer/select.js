import VectorSource from 'ol/source/Vector';
import WebGLVectorLayer from './WebGL';
import {select as selectStyle, draw as drawStyle} from './style/select';

const selectSource = new VectorSource({});
const drawSource = new VectorSource({});

const select = new WebGLVectorLayer({
  source: selectSource,
  style: selectStyle,
  minZoom: 6
});

select.set('name', 'selectLayer');

const draw = new WebGLVectorLayer({
  source: drawSource,
  style: drawStyle,
  minZoom: 6
});

draw.set('name', 'drawLayer');

export {select, draw};
