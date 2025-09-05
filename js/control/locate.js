import $ from 'jquery';
import Overlay from 'ol/Overlay';
import {getLocationOverlay, getView, getBslLayer} from '../util';
import {restoreLocation, storeLocation} from '../storage/storage';
import {showAlert} from './dialog';

const env = import.meta.env;
const token = env.VITE_ARC_TOKEN;
const endpoint = env.VITE_GEOCODE_URL;
const searchExtent = encodeURIComponent(env.VITE_SEARCH_EXTENT);

const searchRequest = 'findAddressCandidates?f=pjson&outSR=3857'
  + `&token=${token}&searchExtent=${searchExtent}&singleLine=`;

const suggestRequest = 'suggest?f=json'
  + `&token=${token}&searchExtent=${searchExtent}&text=`;

function searchLocation(input) {
  const url = `${endpoint}${searchRequest}${encodeURIComponent(input)}`;
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      response.json().then(possible => {
        if (possible.error) {
          reject(possible.error);
        }
        resolve(possible.candidates);
      }).catch(error => {
        console.error(error);
        reject(error);
      });
    }).catch(error => {
      console.error(error);
      reject(error);
    });
  });
}

function suggestLocations(partial) {
  if (!$('#search-lid').is(':checked')) {
    const url = `${endpoint}${suggestRequest}${encodeURIComponent(partial)}`;
    return new Promise((resolve, reject) => {
      fetch(url).then(response => {
        response.json().then(possible => {
          if (possible.error) {
            reject(possible.error);
          }
          resolve(possible.suggestions);
        }).catch(error => {
          console.error(error);
          reject(error);
        });
      }).catch(error => {
        console.error(error);
        reject(error);
      });
    });
  }
}

function handleSearch(event) {
  const search = $('#search').val().trim();
  event.preventDefault();
  if (search) {
    $('#locate button').addClass('loading');
    $('#possible').slideUp();

    if (!$('#search-lid').is(':checked')) {
      searchLocation(search).then(candidates => {
        if (candidates.length > 0) {
          if (candidates.length === 1 || candidates[0].score === 100) {
            displayOnMap(candidates[0]);
          } else {
            displayCandidates(candidates);
          }
        } else {
          notFound(search);
        }
      }).catch(error => console.error(error));  
    } else {
      const feature = findFeature(search);
      if (feature) {
        const coord = feature.getGeometry().getCoordinates();
        displayOnMap({
          location: {x: coord[0], y: coord[1]},
          address: ''
        });        
      } else {
        notFound(search);
      }
    }
  }
}

function notFound(search) {
  const message = $(`<span>"${search}"</span> <span data-i18n="dialog.not_found"></span>`);
  showAlert(message.localize());
  $('#locate button').removeClass('loading');
}

function findFeature(locationId) {
  const source = getBslLayer().getSource();
  const features = source.getFeatures();
  return features.find(feature => feature.get('location_id') == locationId);
}

function handleSuggest(event) {
  if (!$('#search-lid').is(':checked')) {
    if (event.code !== 'Enter') {
      const partial = $('#search').val();
      if (partial.length > 3) {
        suggestLocations(partial).then(suggestions => {
          displaySuggestions(suggestions);
        }).catch(error => console.error(error));
      }
    }
  }
}

function displayPossible(possibles, textOrAddress) {
  const added = {};
  const list = $('#possible').empty();
  possibles.forEach(possible => {
    const location = possible[textOrAddress];
    if (added[location] === undefined) {
      const li = $(`<li class="list-group-item focus-ring" 
        tabindex="0">${location}</li>`);
      added[location] = true;
      li.on('click', event => {
        list.slideUp();
        $('#search').val(li.html());
        $('#locate').trigger('submit');
      });
      list.append(li);
    }
  });
  list.slideDown();
}

function displayCandidates(candidates) {
  displayPossible(candidates, 'address');
}

function displaySuggestions(suggestions) {
  displayPossible(suggestions, 'text');
}

function gottaMove(currentCenter, newCenter) {
  return currentCenter[0] !== newCenter[0] || currentCenter[1] !== newCenter[1];
}

function displayOnMap(candidate) {
  const view = getView();
  const location = [candidate.location.x, candidate.location.y];
  if (gottaMove(view.getCenter(), location)) {
    const address = candidate.address;
    const locationOverlay = getLocationOverlay();
    locationOverlay.setPosition(location);
    view.animate({zoom: 16, center: location},
      () => {
        $('#locate button').removeClass('loading');
        $(locationOverlay.getElement())
          .attr('title', address)
          .attr('aria-label', address);
    });
    storeLocation(candidate);
  } else {
    $('#locate button').removeClass('loading');
  }
}

export function getLocation() {
  return getLocationOverlay().getPosition();
}

export function getAddress() {
  return $(getLocationOverlay().getElement()).attr('title');
}

function toggleSearchType() {
  const check =$('#search-lid');
  const input = $('#search');
  if (check.is(':checked')) {
    input.attr('data-i18n', '[placeholder]form.lid.placeholder;[aria-label]form.lid.placeholder')
      .val('').localize();
  } else {
    input.attr('data-i18n', '[placeholder]form.search.placeholder;[aria-label]form.search.placeholder')
      .val('').localize();
  }
}

export function createLocator(map, restore) {
  const form = $('<form id="locate"></form>');
  const div = $('<div class="form-group search-map"><ul id="possible" class="list-group"></ul><button type="submit" class="btn btn-primary focus-ring" data-i18n="[aria-label]search"><div></div></button></div>');
  const input = $('<input type="text" class="form-control focus-ring" id="search" data-i18n="[placeholder]form.search.placeholder;[aria-label]form.search.placeholder">');
  const check = $('<input type="checkbox" class="form-check-input focus-ring" id="search-lid"><label for="search-lid" data-i18n="form.lid.label"></label>');
  const possible = div.find('#possible');

  form.append(div.prepend(input)).append(check).localize();
  $('#tab-col').prepend(form);

  check.on('change', toggleSearchType);

  $(document).on('click', () => $('#possible').slideUp());
  possible.on('keyup', event => {
    if (event.key === 'Escape') possible.slideUp();
  });
  $(document).on('keyup', event => {
    const target = event.target;
    if (event.key === 'Tab'
      && target.id !== 'possible'
      && !$.contains(possible.get(0), target)) {
        possible.slideUp();
      }
  });
  $('body').append('<div id="location" class="location"></div>');
  const locationOverlay = new Overlay({
    element: $('#location').get(0),
    offset: [-16, -28],
    className: 'overlay-0 ol ol-overlay-container ol-selectable'
  });

  map.addOverlay(locationOverlay);
  map.set('locationOverlay', locationOverlay);
  $(form).on('submit', handleSearch);
  $('#search').on('keyup', handleSuggest);

  if (restore) {
    const lastLocation = restoreLocation();
    if (lastLocation !== undefined) {
      $('#locate button').addClass('loading');
      displayOnMap(lastLocation);
      $('#search').val(lastLocation.address);
    }
  }
}
