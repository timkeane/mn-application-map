import $ from 'jquery';
import {getFeatureHtmlId, appendChallengeButton, getDistance, i18nAddress} from './html';

export default function html(feature, type) {
  const id = getFeatureHtmlId(feature, type);
  const locationId = feature.get('location_id') || 'Unknown';
  const address = i18nAddress({
    name: feature.get('busname'),
    addr: feature.get('streetaddress'),
    city: feature.get('city'),
    state: '<span data-i18n="feature.value.addr_state"></span>',
    zip: feature.get('zipcode')
  });
  const locType = feature.get('apptype');
  const mdu = feature.get('multunit');
  const up = feature.get('speedtestup');
  const down = feature.get('speedtestdown');
  const speed = (up && down) ? `${new Number(down).toLocaleString()} Mbps down / ${new Number(up).toLocaleString()} Mbps up` : null;
  const css = `bsl ${type}`;
  const html = $(`<div id="${id}" class="feature-html ${css}"><h4 class="focus-ring" tabindex="0"><span data-i18n="layer.bsl.name"></span></h4></div>`)
    .append(getDistance(feature))
    .append(`<address>${address}</address>`)
    .append(`<div class="location-id"><span class="field" data-i18n="[prepend]feature.field.id">:</span> <span>${locationId}</span></div>`)
    .append(`<div class="location-type"><span class="field" data-i18n="[prepend]feature.field.loctype">:</span> <span>${locType}</span></div>`)
    .append(`<div class="mdu"><span class="field" data-i18n="[prepend]feature.field.mdu">:</span> <span>${mdu}</span></div>`)
    // .append(speed ? `<div class="speed"><span class="field" data-i18n="[prepend]feature.field.speed">:</span> <span>${speed}</span></div>` : '')
  appendChallengeButton(feature, html);

  return html.localize();
}