import EsriPbf from './format/EsriPbf';
import VectorSource from 'ol/source/Vector';
import WebGLVectorLayer from './WebGL';
import style from './style/blockGroup';
import {tile as strategy} from 'ol/loadingstrategy';
import {createXYZ} from 'ol/tilegrid';
import {getParameterizedtUrl} from '../util';

const env = import.meta.env;
const bgUrl = `${env.VITE_BG_URL}&token=${env.VITE_ARC_TOKEN}`;

function bgBbox(extent, resolution, projection) {
  return getParameterizedtUrl(bgUrl, extent);
}

const source = new VectorSource({
  format: new EsriPbf({
    dataProjection: 'EPSG:3857',
    idPrefix: 'bg-',
    idProp: 'FID'
  }),
  url: bgBbox,
  strategy: strategy(createXYZ({tileSize: 512}))
});

const layer = new WebGLVectorLayer({
  source,
  style,
  minZoom: 1,
  visible: false
});

layer.set('name', 'bg');

export default layer;
