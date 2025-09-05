import $ from 'jquery';
import {addToChallenge, removeFromChallenge, setDisabled} from '../challenge/challenge';
import {getCurrentLanguage} from '../i18n/i18n';
import {panPopup} from '../control/popup';
import {isChallenge} from '../util';

function manageCss(feature, challenge) {
  const htmls = getElements(feature);
  const addRemove = challenge ? 'addClass' : 'removeClass';
  htmls[addRemove]('challenge');
}

function getElements(feature, isButton) {
  const fid = feature.getId();
  const selector = [];
  if (isButton) {
    selector.push(`#location-${fid} button.challenge`);
    selector.push(`#challenge-${fid} button.challenge`);
    selector.push(`#popup-${fid} button.challenge`);
  } else {
    selector.push(`[data-fid="${fid}"`);
  }
  return $(selector.join());
}

export function getFeatureHtmlId(feature, idType) {
  return `${idType}-${feature.getId()}`;
}

export function appendChallengeButton(feature, featureHtml) {
  const challenge = isChallenge(feature);
  const i18n = challenge ? 'btn.remove_challenge.name' : 'btn.add_challenge.name';
  const button = $(`<button class="btn btn-primary focus-ring challenge" data-i18n="${i18n}"></button>`)
    .on('click', challenge ? removeFromChallenge : addToChallenge)
    .data('feature', feature);
  feature.set('challenge', challenge, true); //takes care of reloaded from local storage
  featureHtml.append(button);
}

export function updateChallengeButtons(event) {
  const feature = event.feature;
  const challenge = isChallenge(feature);
  const buttons = getElements(feature, true);
  const i18n = challenge ? 'btn.remove_challenge.name' : 'btn.add_challenge.name';
  buttons.attr('data-i18n', i18n)
    .off('click', !challenge ? removeFromChallenge : addToChallenge)
    .on('click', challenge ? removeFromChallenge : addToChallenge)
    .localize();
  panPopup();
  manageCss(feature, challenge);
  if (event.type === 'addfeature') {
    setDisabled(false);
  }
}

export function getDistance(feature) {
  const distance = feature.get('distance');
  if (distance !== undefined) {
    const lng = getCurrentLanguage();
    const label = $('<label data-i18n="feature.value.distance"></label>').localize();
    let miles = new Number((distance / 1609.34).toFixed(2));
    miles = new Intl.NumberFormat(lng).format(miles);
    return $(`<div class="distance">${miles} mi</div>`)
      .attr('aria-label', `${miles} ${label.html()}`);
  }
  return '';
}

export function i18nAddress(options) {
  const name = options.name ? `${options.name}<br>` : '';
  const addr = options.addr;
  const city = options.city;
  const state = options.state;
  const zip = options.zip;
  if ($('html').attr('dir') === 'rtl') {
    return `${name}${zip} ${state}, ${city}<br>${addr}`;
  }
  return `${name}${addr}<br>${city}, ${state} ${zip}`;
}