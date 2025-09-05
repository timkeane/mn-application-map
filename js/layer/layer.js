import {select as selectLayer, draw as drawLayer} from './select';
import createChallengeLayer from './challenge';
import bslLayer from './bsl';
import boundaryLayer from './boundary';
import bgLayer from './blockGroup';
import {getCurrentLanguage} from '../i18n/i18n';
import {updateLocationList} from '../list/list';
import {createFeatureSelector} from '../control/select';
import {createPulseAnimation} from '../control/pulse';
import {createPopup} from '../control/popup';
import {createFeatureTips} from '../control/tip';

const env = import.meta.env;
const styleUrl = `${env.VITE_BASEMAP_URL}?token=${env.VITE_ARC_TOKEN}`;

export default function addLayers(map, restore) {
  return new Promise((resolve, reject) => {
    import('ol-mapbox-style').then(olms => {
      return new Promise(() => {
        olms.apply(map, `${styleUrl}&language=${getCurrentLanguage()}`).then(map => {
          const challengeLayer = createChallengeLayer(restore);
          const bslSource = bslLayer.getSource();

          bslLayer.on('change:visible', updateLocationList);
          bslSource.on('loadcomplete', updateLocationList);

          map.addLayer(boundaryLayer);
          map.addLayer(bgLayer);
          map.addLayer(selectLayer);
          map.addLayer(drawLayer);
          map.addLayer(challengeLayer);
          map.addLayer(bslLayer);

          map.set('boundary', bgLayer);
          map.set('bg', bgLayer);
          map.set('select', selectLayer);
          map.set('draw', drawLayer);
          map.set('bsl', bslLayer);
          map.set('challenge', challengeLayer);

          createPopup(map);
          createFeatureSelector(map);
          createFeatureTips(map);
          createPulseAnimation();

          resolve(map);
        }).catch(error => {
          console.error(error);
          reject(error);
        });
      });
    }).catch(error => {
      console.error(error);
      reject(error);
    });
  });
}
