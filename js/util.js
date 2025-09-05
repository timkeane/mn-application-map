import $ from 'jquery';
import {getCurrentLanguage} from './i18n/i18n';

const env = import.meta.env;
const storage = {};
const svg = {
  challenge: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#111a52" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M6.043 19.496l-1.482 1.505c-2.791-2.201-4.561-5.413-4.561-9.001s1.77-6.8 4.561-9l1.482 1.504c-2.326 1.835-3.804 4.512-3.804 7.496s1.478 5.661 3.804 7.496zm.675-7.496c0-1.791.887-3.397 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.101-2.282-2.707-2.282-4.498zm15.043 0c0-2.984-1.478-5.661-3.804-7.496l1.482-1.504c2.791 2.2 4.561 5.412 4.561 9s-1.77 6.8-4.561 9.001l-1.482-1.505c2.326-1.835 3.804-4.512 3.804-7.496zm-6.761 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.18-4.533-3.04-6l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.397-2.282 4.498zm-3-7.498c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3z"/></svg>',
  served: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#CC0202" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z"/></svg>',
  underserved: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#F7B500" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z"/></svg>',
  unserved: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle fill="" stroke="#000" stroke-width="3" cx="24" cy="24" r="19"/><circle fill="#008450" stroke="#fff" stroke-width="3" cx="24" cy="24" r="16"/><path fill="#fff" transform="translate(12, 12)" d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z"/></svg>',
  'y-eligible': '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect fill="#000" x="3" y="3" width="42" height="42"/><rect fill="#fff" x="6" y="6" width="36" height="36"/><rect fill="#008450" x="9" y="9" width="30" height="30"/><path fill="#fff" transform="translate(12, 12)" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>',
  'n-eligible': '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect fill="#000" x="3" y="3" width="42" height="42"/><rect fill="#fff" x="6" y="6" width="36" height="36"/><rect fill="#CC0202" x="9" y="9" width="30" height="30"/><path fill="#fff" transform="translate(13.2, 13.2) scale(0.9 0.9)" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'
};

export function store(prop, obj) {
  storage[prop] = obj;
}

export function getMap() {
  return storage.map;
}

export function getView() {
  return getMap().getView();
}

export function getBslLayer() {
  return getMap().get('bsl');
}

export function getBgLayer() {
  return getMap().get('bg');
}

export function getChallengeSource() {
  return getMap().get('challenge').getSource();
}

export function getSelectLayer() {
  return getMap().get('select');
}

export function getSelectSource() {
  return getSelectLayer().getSource();
}

export function getDrawLayer() {
  return getMap().get('draw');
}

export function getDrawSource() {
  return getDrawLayer().getSource();
}

export function layerFilter(layer) {
  return layer.get('name') === getBslLayer().get('name');
}

export function getPopupOverlay() {
  return getMap().get('popupOverlay');
}

export function getLocationOverlay() {
  return getMap().get('locationOverlay');
}

export function getState() {
  return env.VITE_STATE;
}

export function getChallengeFill() {
  return env.VITE_CHALLENGE_FILL;
}

export function getChallengeStroke() {
  return env.VITE_CHALLENGE_STROKE;
}

export function getSelectFill() {
  return env.VITE_SELECT_FILL;
}

export function getSelectStroke() {
  return env.VITE_SELECT_STROKE;
}

export function getDrawFill() {
  return env.VITE_DRAW_FILL;
}

export function getDrawStroke() {
  return env.VITE_DRAW_STROKE;
}

export function getBgFill() {
  return env.VITE_BG_FILL;
}

export function getBgStroke() {
  return env.VITE_BG_STROKE;
}

export function getBoundaryStroke() {
  return env.VITE_BOUNDARY_STROKE;
}

export function isChallenge(feature) {
  return getChallengeSource().getFeatureById(feature.getId()) !== null || feature.get('challenge');
}

export function getIconDataUri(value) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg[value])}`;
}

export function getParameterizedtUrl(url, extent, where) {
  where = where || '1 = 1';
  const whereParam = encodeURIComponent(where);
  const extentParam = `{"xmin":${extent[0]},"ymin":${extent[1]},"xmax":${extent[2]},"ymax":${extent[3]},"spatialReference":{"wkid":102100,"latestWkid":3857}}`;
  return `${url}&esriSpatialRelIntersects&geometry=${encodeURIComponent(extentParam)}&where=${whereParam}`;
}

export function getChallengeTabButton() {
  return $(`#${storage.challengeTab.attr('aria-labelledby')}`);
}

export function getTranslate() {
  return storage.translate;
}

export function getSpeed(props) {
  const lng = getCurrentLanguage();
  const up = new Intl.NumberFormat(lng).format(props['max_up']);
  const down = new Intl.NumberFormat(lng).format(props['max_down']);
  if (down === '0' || up === '0') {
    return '<span data-i18n="feature.value.unknown"/>';
  }
  return $('<div></div>')
    .append(`<span>${down}</span>`)
    .append(`<span class="division-sym">/</span>`)
    .append(`<span>${up}</span>`).localize().html();
}

export const columns = [
  {},
  {prop: 'name', name: 'table.column.name', csv:'NAME'},
  {prop: 'streetaddress', name: 'table.column.addr', csv: 'ADDRESS'},
  {prop: 'city', name: 'table.column.city', csv: 'CITY'},
  {prop: 'state', name: 'table.column.state', csv: 'STATE', value: 'MN'},
  {prop: 'zipcode', name: 'table.column.zip', csv: 'ZIP'},
  {prop: 'location_id', name: 'table.column.lid', csv: 'LOCATION_ID'},
  {prop: 'apptype', name: 'table.column.type', csv: 'TYPE'},
  {prop: 'speedtestup', name: 'table.column.max_up', csv: 'UPLOAD_SPEED'},
  {prop: 'speedtestdown', name: 'table.column.max_down', csv: 'DOWNLOAD_SPEED'},
  {prop: 'multunit', name: 'table.column.mdu', csv: 'MULTI_UNIT'}
];
