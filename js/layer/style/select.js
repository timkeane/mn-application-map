import {getDrawFill, getDrawStroke, getSelectFill, getSelectStroke} from '../../util';

export const select = {
  'circle-radius': [
    'interpolate', ['exponential', 2],
    ['zoom'],
    10, 6,
    17, 48
],
  'circle-fill-color': getSelectFill(),
  'circle-stroke-color': getSelectStroke(),
  'circle-stroke-width': 3
};

export const draw = {
  'fill-color': getDrawFill(),
  'stroke-color': getDrawStroke(),
  'stroke-width': 3
}
