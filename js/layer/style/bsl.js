import {getIconDataUri} from '../../util';

export default {
  'icon-src': getIconDataUri('unserved'),
  'icon-size': [48, 48],
  'icon-scale': [
    'interpolate',
    ['exponential', 2], ['zoom'],
    1,
    0.2,
    10,
    0.5,
    20,
    1
  ]
};
