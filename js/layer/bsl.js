import Id from './format/Id';
import Source from './source/Filter';
import WebGLVectorLayer from './WebGL';
import style from './style/bsl';
import html from '../feature/bsl';
import VectorLayer from 'ol/layer/Vector';
import { Projection } from 'ol/proj';

const url = import.meta.env.VITE_BSL_URL;

const source = new Source({
  projection: 'EPSG:4236',
  format: new Id({
    idPrefix: 'bsl-',
    idProp: 'OBJECTID'
  }),
  url
});

const layer = new WebGLVectorLayer({
  source,
  style,
  minZoom: 1
});

layer.set('name', 'bsl');
layer.set('featureHtml', html);

export default layer;
