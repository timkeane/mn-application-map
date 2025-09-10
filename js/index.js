import $ from 'jquery';
import initI18n from './i18n/i18n';
import Map from 'ol/Map';
import Rotate from 'ol/control/Rotate';
import {getAlwaysLoad, hasLocalStorage} from './storage/storage';
import {showIntro, showRestoreDialog} from './control/dialog';
import spin from './i18n/translate';
import createLayout from './html/layout';
import addLayers from './layer/layer';
import {store} from './util';
import {createLocator, getLocation} from './control/locate';
import {createLists} from './list/list';
import {createLegend} from './control/legend';
import createHelp from './control/help';

const hasStorage = hasLocalStorage(); 

function removeRotate(map) {
  const controls = map.getControls().getArray();
  const rotate = controls.filter(control => {
    return control instanceof Rotate;
  })[0];
  map.removeControl(rotate);
}

function load(restore) {
  createLayout().then(layout => {
    const map = new Map({target: layout.map});

    $('.ol-attribution button')
      .addClass('attribution')
      .one('click', () => {
        const cn = $('<a href="https://ConnectedNation.org" target="_blank" rel="noopeneer">Powered by ConnectedNation.org</a><br>');
        $('.ol-attribution li').prepend(cn);
      });

    removeRotate(map);
    store('map', map);

    addLayers(map, restore).then(map => {
      createHelp(layout.banner);
      createLocator(map, restore);
      createLists(layout, restore);
      createLegend(map, layout.tabs.layers);

      if (!restore || getLocation() === undefined) {
        const view = map.getView();
        const env = import.meta.env;
        const center = JSON.parse(env.VITE_CENTER);
        const zoom = env.VITE_ZOOM * 1;
        view.setZoom(zoom);
        view.setCenter(center);
      }

      map.once('postrender', () => {
        $('body').removeClass('loading');
        $(window).trigger('resize');
        $('#search').trigger('focus');
      });
      spin();

      // if (!hasStorage) showIntro();
    });
  });
}

initI18n().then(() => {
  load(false);
  // if (hasStorage) {
  //   if (getAlwaysLoad()) {
  //     load(true);
  //   } else {
  //     showRestoreDialog(load);
  //   }
  // } else {
  //   load(false);
  // }
});
