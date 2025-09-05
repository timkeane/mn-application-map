import {getIconDataUri, getChallengeFill, getChallengeStroke} from '../../util';

export default [
  {
    'circle-radius': [
      'interpolate', ['exponential', 2],
      ['zoom'],
      10, 6,
      17, 48
    ],
    'circle-fill-color': getChallengeFill(),
    'circle-stroke-color': getChallengeStroke(),
    'circle-stroke-width': 3
  },
  {
    'icon-src': getIconDataUri('challenge'),
    'icon-size': [48, 48],
    'icon-scale': [
      'interpolate',
      ['exponential', 2], ['zoom'],
      10, 0.1,
      17, 1
    ]
  }
];
