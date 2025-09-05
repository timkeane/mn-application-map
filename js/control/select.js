import $ from 'jquery';
import Draw from 'ol/interaction/Draw';
import Control from 'ol/control/Control';
import {draw as drawStyle} from '../layer/style/select';
import {getBslLayer, getChallengeSource, getDrawLayer, getDrawSource, getMap, getPopupOverlay, getSelectLayer, getSelectSource, getView, layerFilter} from '../util';
import {addToChallenge} from '../challenge/challenge';
import LineString from 'ol/geom/LineString';
import {getLocation} from './locate';
import Overlay from 'ol/Overlay';

const div = $('<div id="wait"></div>');
$('body').append(div);
const waitOverlay = new Overlay({
  element: div.get(0),
  offset: [-20, -20],
  className: 'overlay-3 ol ol-overlay-container ol-selectable'
});

class Toggle extends Control {
  constructor(options) {
    const div = $('<div class="select ol-toggle ol-button ol-unselectable ol-control"></div>');
    const button = $('<button class="select-button" disabled></button>');
    const element = div.append(button).localize().get(0);

    super({element});

    this.active = false;
    this.disabled = true;
    this.button = button;
    this.map = options.map;
    this.drawLayer = options.drawLayer;
    this.drawInteraction = options.drawInteraction;
    this.drawInteraction.setActive(false);
    this.popup = options.popup;

    this.button.on('click', this.toggle.bind(this));
  }

  setActive(active) {
    this.active = active;
    this.drawLayer.setVisible(active);
    this.drawInteraction.setActive(active);
    this.popup.setActive(!active);
    $(this.element)[active ? 'addClass' : 'removeClass']('ol-active');
    $(this.map.getTargetElement())[active ? 'addClass' : 'removeClass']('draw-select');
  }

  getActive() {
    return this.active;
  }

  setDisable(disable) {
    this.disabled = disable;
    if (disable) this.active = false;
    this.button.prop('disabled', disable);
  }

  toggle() {
    this.setActive(!this.active);
  }
}

class AddToChallenge extends Control {
  constructor(options) {
    const html = '<div class="add-selection ol-unselectable ol-control"></div>';
    const button = $('<button data-i18n="btn.add_challenge.name"></button>');
    const div = $(html).append(button).localize();
    const view = options.view;
    const selectLayer = options.selectLayer;
    const select = options.select;

    super({element: div.get(0)});

    this.selectSource = options.selectSource;
    this.challengeSource = options.challengeSource;
    this.select = select;

    button.on('click', this.addChallenges.bind(this));
    this.selectSource.on('change', this.hideShow.bind(this));
    view.on('change:resolution', () => {
      const disable = view.getZoom() <= selectLayer.getMinZoom();
      select.setDisable(disable);
      if (select.getActive()) {
        select.setActive(!disable);
      }
      button.prop('disabled', disable);
    });
  }
  hideShow() {
    const features = this.selectSource.getFeatures();
    $('.add-selection')[features.length > 0 ? 'fadeIn' : 'fadeOut']();
  }
  addChallenges() {
    const view = this.getMap().getView();
    waitOverlay.setPosition(view.getCenter());
    this.select.setActive(false);

    setTimeout(() => {
      const features = this.selectSource.getFeatures();
      features.forEach(feature => {
        addToChallenge(feature);
      });
      this.selectSource.clear();
      waitOverlay.setPosition(undefined);
    }, 100);
  }
}

function getSelectActive(map) {  
  const controls = map.getControls().getArray();
  const select = controls.filter(control => {
    return control.get('select');
  })[0];
  return select.getActive();
}

function onSingleClick(event) {
  const map = event.map;
  if (getSelectActive(map)) {
    const selectSource = getSelectSource();
    const drawSource = getDrawSource();
    let clearSelection = true;
    map.forEachFeatureAtPixel(event.pixel, feature => {
      clearSelection = false;
      const id = feature.getId();
      if (id !== undefined) {
        const existingFeature = selectSource.getFeatureById(id);
        if (existingFeature === null) {
          selectSource.addFeature(feature);
        } else {
          selectSource.removeFeature(existingFeature);
        }
      }
    }, {layerFilter});
    if (clearSelection) {
      selectSource.clear();
      drawSource.clear();
    }
  }
}

function addToSelected(polygon, features) {
  const selectSource = getSelectSource();
  features.forEach(feature => {
    const userCoord = feature.getGeometry().getCoordinates();
    if (polygon.intersectsCoordinate(userCoord)) {
      selectSource.addFeature(feature);
    }
  });
  waitOverlay.setPosition(undefined);
}

function drawEnd(event) {
  const polygon = event.feature.getGeometry();
  const features = getFeaturesInView();
  waitOverlay.setPosition(getView().getCenter());
  setTimeout(() => {
    addToSelected(polygon, features);
  }, 100);
}

function setDistance(userCoord, feature) {
  const geom = feature.getGeometry();
  const featureCoord = geom.getCoordinates();
  const line = new LineString([userCoord, featureCoord]);
  const distance = line.getLength();
  feature.set('distance', distance);
}

function sort(features) {
  const userCoord = getLocation();
  if (userCoord) {
    if (features.length === 1) {
      setDistance(userCoord, features[0]);
      return features;
    }
    features.sort((f0, f1) => {
      setDistance(userCoord, f0);
      setDistance(userCoord, f1);
      const dist0 = f0.get('distance');
      const dist1 = f1.get('distance')
      if (dist0 < dist1) {
        return -1;
      } else if (dist0 > dist1) {
        return 1;
      }
      return 0
    });
  }
  return features;
}

export function getFeaturesInView() {
  const map = getMap();
  const view = map.getView();
  const bslLayer = getBslLayer();
  const bslSource = bslLayer.getSource();
  const extent = view.calculateExtent(map.getSize());
  const bslFeatures = bslLayer.getVisible() ? bslSource.getFeaturesInExtent(extent) : [];
  return sort(bslFeatures);
}

export function createFeatureSelector(map) {
  const view = map.getView();
  const selectLayer = getSelectLayer();
  const drawLayer = getDrawLayer();
  const selectSource = getSelectSource();
  const drawSource = getDrawSource();
  const challengeSource = getChallengeSource();
  const popup = getPopupOverlay();

  const drawInteraction = new Draw({
    source: drawSource,
    type: 'Polygon',
    freehand: true,
    style: drawStyle
  });

  const select = new Toggle({
    map,
    drawLayer,
    drawInteraction,
    popup
  });

  const addChallenge = new AddToChallenge({
    select,
    view,
    selectLayer,
    selectSource,
    challengeSource
  });

  select.set('select', true);
  map.addOverlay(waitOverlay);
  map.addControl(select);
  map.addInteraction(drawInteraction);
  map.addControl(addChallenge);
  drawInteraction.on('drawend', drawEnd);
  map.on('singleclick', onSingleClick);
}
