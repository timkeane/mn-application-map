import $ from 'jquery';
import {showGuide} from './dialog';

const html = `<button class="help"
  data-i18n="[title]dialog.guide.title;[aria-label]dialog.guide.title;"
  type="button"><h2 class="screen-reader-only" data-i18n="dialog.guide.title"
  ></h2><span aria-hidden="true">?</span></button>`;

export default function create(insertAfter) {
  const help = $(html);
  help.insertAfter(insertAfter);
  help.on('click', () => showGuide());
}
