import $ from 'jquery';
import {showChallengeDateDialog, showDeleteDialog} from '../control/dialog';
import {deleteStoredData, loadChallengesCsv, saveChallengesCsv, storeChallenges} from '../storage/storage';
import {viewAsTable} from './table';
import {getMap, getChallengeSource, getChallengeTabButton} from '../util';
import Feature from 'ol/Feature';

const form = $(`<form id="challenge" action="${import.meta.env.VITE_SUBMIT_URL}" method="POST">
  <input name="payload" type="hidden">
</form>`);

function getFeature(eventOrFeature) {
  if (eventOrFeature instanceof Feature) {
    return eventOrFeature;
  }
  return $(eventOrFeature.target).data('feature');
}

function updateTab() {
  getChallengeTabButton()
    .attr('data-i18n', 'tab.challenges.name')
    .removeAttr('aria-alert')
    .removeClass('new')
    .localize();
}

function handleChallengeSubmission(event) {
  event.preventDefault();
  const form = event.target;
  const source = getChallengeSource();
  const features = source.getFeatures();
  const submission = {cai: [], bsl: []};
  features.forEach(feature => {
    const lid = feature.get('lid');
    if (feature.getId().indexOf('cai') > -1) {
      submission.cai.push(lid);
    } else {
      submission.bsl.push(lid);
    }
  });
  $(form).find('input[name="payload"]').val(JSON.stringify(submission));
  form.submit();
}

function showTable(event) {
  event.preventDefault();
  viewAsTable(getChallengeSource().getFeatures(), removeFromChallenge);
}

function save(event) {
  event.preventDefault();
  saveChallengesCsv();
}

function load(event) {
  event.preventDefault();
  loadChallengesCsv();
}

function deleteAll(yes) {
  if (yes) {
    const source = getChallengeSource();
    const features = source.getFeatures();
    features.forEach(feature => {
      feature.set('challenge', false, true);
      source.removeFeature(feature);
    });
    deleteStoredData();
    setDisabled(true);
  }
}

function promptDeleteAll(event) {
  event.preventDefault();
  showDeleteDialog(deleteAll);
}

function addButtons(form) {
  const div = $('<div></div>');
  const names = ['delete', 'table', 'save', 'open'];
  const buttons = {};
  names.forEach(name => {
    const button = $('<button class="btn btn-primary"></button>')
      .attr('data-i18n', `[title]form.challenges.${name};[aria-label]form.challenges.${name}`)
      .prop('disabled', name !== 'open')
      .addClass(`sm ${name}`);
    buttons[name] = button;
    div.append(button);
  });
  form.append(div);
  buttons.save.on('click', save);
  buttons.open.on('click', load);
  buttons.table.on('click', showTable);
  buttons.delete.on('click', promptDeleteAll);
  form.append('<button data-i18n="form.challenges.submit" type="submit" class="btn btn-primary" disabled></button>');
}

function displaySubmitMessage(event) {
  event.preventDefault();
  showChallengeDateDialog();
}

function setFormAction(form) {
  const disableUntil = new Date(import.meta.env.VITE_SUBMIT_DATE).getTime();
  const now = new Date().getTime();
  const enable = now > disableUntil;
  if (enable) {
    form.on('submit', handleChallengeSubmission);
  } else {
    form.on('submit', displaySubmitMessage);
  }
}

export function setDisabled(disabled) {
  form.find('button').each((_, button) => {
    if (!$(button).hasClass('open')) {
      $(button).prop('disabled', disabled);
    }
  });
}

export function addToChallenge(eventOrFeature) {
  const map = getMap();
  const feature = getFeature(eventOrFeature);
  const source = getChallengeSource();
  feature.set('challenge', true, true);
  source.addFeature(feature);
  getChallengeTabButton().addClass('new')
    .attr('data-i18n', 'tab.challenges.new;[aria-alert]tab.challenges.new')
    .one('click', updateTab)
    .localize();
  storeChallenges(source.getFeatures());
  setDisabled(false);
}

export function removeFromChallenge(event) {
  const map = getMap();
  const source = getChallengeSource();
  const feature = $(event.target).data('feature');
  const challengeFeature = source.getFeatureById(feature.getId());
  feature.set('challenge', false, true);
  challengeFeature.set('challenge', false, true);
  source.removeFeature(challengeFeature);
  storeChallenges(source.getFeatures());
  if (source.getFeatures().length === 0) {
    updateTab();
    setDisabled(true);
  }
}

export function createChallengeForm(tab, restore) {
  $(tab.prepend(form));
  addButtons(form);
  setDisabled(!restore);
  setFormAction(form);
  form.localize();
}
