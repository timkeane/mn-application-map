import {getIconDataUri} from '../../util';

export default [
  {
    filter: ['==', ['get', 'eligible'], 'Y'],
    'icon-src': getIconDataUri('y-eligible'),
    'icon-size': [48, 48],
    'icon-scale': [
      'interpolate',
      ['exponential', 2], ['zoom'],
      10, 0.1,
      17, 1
    ]
  },
  {
    filter: ['==', ['get', 'eligible'], 'N'],
    'icon-src': getIconDataUri('n-eligible'),
    'icon-size': [48, 48],
    'icon-scale': 
    [
      'interpolate',
      ['exponential', 2], ['zoom'],
      10, 0.1,
      17, 1
    ]
  }
];
