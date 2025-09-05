import $ from 'jquery';
import {getBslLayer, getChallengeSource, isChallenge} from '../util';
import {getFeaturesInView} from '../control/select';
import {getFeatureHtmlId} from '../feature/html';
import {pulseFeature} from '../control/pulse';
import {createChallengeForm} from '../challenge/challenge';
import {storeChunksOfFeatures, getNextChunkOfFeatures} from './chunk';
import { getAddress } from '../control/locate';

const tabsAndLists = {};

function hideShowLocationMesssage(list, count) {
  const tab = tabsAndLists.tabs.location;
  const message = tab.find('.message');
  const hasItems = count > 0;
  if (hasItems) {
    const alert = $(`<div>
      <span data-i18n="list.alert.showing"></span>
      ${count}
      <span data-i18n="list.alert.sites"></span>
      ${getAddress()}
      </div>`)
      .localize().text();
    list.attr('aria-alert', alert);
    message.hide();
  } else {
    list.removeAttr('aria-alert');
    message.show();
  }
}

function hideShowChallengeMesssage(list) {
  const tab = tabsAndLists.tabs.challenge;
  const hasItems = list.children().length > 0;
  tab.find('.message')[hasItems ? 'hide' : 'show']();
}

function locationOnClick(feature, h4) {
  const button = tabsAndLists.mapButton;
  h4.on('click', () => {
    if (button.is(':visible')) {
      button.trigger('click');
    }
    pulseFeature(feature, true);
  });
}

function appendToLocationList(locationList, feature, featureHtml) {
  const li = $('<li class="list-group-item"></li>')
    .addClass(feature.getId().indexOf('cai') > -1 ? 'cai' : 'bsl')
    .addClass(isChallenge(feature) ? 'challenge' : '')
    .append(featureHtml(feature, 'location'))
    .attr('data-fid', feature.getId());
  locationList.append(li);
  locationOnClick(feature, li.find('h4'));
}

function renderNextChunckOfFeatures(locationList) {
  const bslFeatureHtml = getBslLayer().get('featureHtml');
  const features = getNextChunkOfFeatures();
  features.forEach(feature => {
    if (feature.getId().indexOf('cai') > -1) {
      appendToLocationList(locationList, feature, caiFeatureHtml);
    } else {
      appendToLocationList(locationList, feature, bslFeatureHtml);
    }
  });
}

function removeFromChallengeList(event) {
  const feature = event.feature;
  const featureHtml = $(`#${getFeatureHtmlId(feature, 'challenge')}`);
  featureHtml.parent().remove();
  hideShowChallengeMesssage($('#challenge-list'));
}

function addToChallengeList(eventOrFeature) {
  const layer = getBslLayer();
  const feature = eventOrFeature.feature || eventOrFeature;
  const featureHtml = layer.get('featureHtml');
  const challengeList = $('#challenge-list');
  const li = $('<li class="list-group-item"></li>')
    .append(featureHtml(feature, 'challenge'))
    .attr('data-fid', feature.getId());
  challengeList.append(li);
  hideShowChallengeMesssage(challengeList);
  locationOnClick(feature, li.find('h4'));
}

export function updateLocationList() {
  const features = getFeaturesInView();
  const locationList = $('#location-list').empty();
  storeChunksOfFeatures(features, 20);
  $('#tab-content').scrollTop(0);
  renderNextChunckOfFeatures(locationList);
  hideShowLocationMesssage(locationList, features.length);
  $('#locate button').removeClass('loading');
}

export function createLists(layout, restore) {
  const locationTab = layout.tabs.location;
  const challengeTab = layout.tabs.challenge;
  const locationList = $('<ul id="location-list" class="list-group"></ul>');
  const challengeList = $('<ul id="challenge-list" class="list-group"></ul>');
  const challengeSource = getChallengeSource();

  tabsAndLists.tabs = layout.tabs;
  tabsAndLists.lists = {location: locationList, challenge: challengeList};
  tabsAndLists.mapButton = layout.mapButton;

  createChallengeForm(challengeTab, restore);

  locationTab.append(locationList);
  challengeTab.append(challengeList);
  challengeSource.on('addfeature', addToChallengeList);
  challengeSource.on('removefeature', removeFromChallengeList);
  challengeSource.getFeatures().forEach(feature => {
    addToChallengeList(feature);
  });

  const content = $('#tab-content');
  content.on('scroll', event => {
    const scrollTop = content.scrollTop();
    if (locationTab.is(':visible')) {
      const modifier = 200; 
      const listHeight = locationList.height();
      const currentScroll = scrollTop + content.height();
      $('#location-tab').data('scroll-top', scrollTop);
      if (currentScroll + modifier > listHeight) {
        renderNextChunckOfFeatures(locationList);
      }
    } else if (challengeTab.is(':visible')) {
      $('#challenge-tab').data('scroll-top', scrollTop);
    }
  });
  $('#challenge-tab, #location-tab').on('click', event => {
    content.scrollTop($(event.target).data('scroll-top') || 0);
  });
}
