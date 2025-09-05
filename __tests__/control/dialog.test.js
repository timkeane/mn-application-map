import $ from 'jquery';
import {beforeEach, afterEach, expect, test} from 'vitest';
import {showChallengeDateDialog, showDeleteDialog, showGuide, showProviders, showRestoreDialog} from '../../js/control/dialog';
import {featureCollection} from '../feature';
import {getAlwaysLoad} from '../../js/storage/storage';

beforeEach(() => {
  localStorage.setItem('challenges', JSON.stringify(featureCollection));
  localStorage.removeItem('always');
});

afterEach(() => {
  localStorage.removeItem('challenges');
  localStorage.removeItem('always');
});

test('showRestoreDialog - yes and always', async () => {
  expect.assertions(5);

  function runTest() {
      return new Promise((resolve, reject) => {

        showRestoreDialog(yesNo => {
          expect(yesNo).toBe(true);
          expect(getAlwaysLoad()).toBe(true);
          resolve();
        });

        expect($('#modal').get(0).className).toBe('modal-dialog');
        expect($('#dialog .modal-body').attr('data-i18n')).toBe('dialog.restore');
        expect(getAlwaysLoad()).toBe(false);
      
        $('#dialog input.always').prop('checked', true).trigger('change');
        $('#dialog button.yes').trigger('click');
      });
    }

    await runTest();
  });

  test('showRestoreDialog - yes and not always', async () => {
    expect.assertions(5);

    function runTest() {
      return new Promise((resolve, reject) => {

        showRestoreDialog(yesNo => {
          expect(yesNo).toBe(true);
          expect(getAlwaysLoad()).toBe(false);
          resolve();
        });

        expect($('#modal').get(0).className).toBe('modal-dialog');
        expect($('#dialog .modal-body').attr('data-i18n')).toBe('dialog.restore');
        expect(getAlwaysLoad()).toBe(false);

        $('#dialog input.always').prop('checked', false).trigger('change');
        $('#dialog button.yes').trigger('click');
      });
    }

    await runTest();
  });

  test('showRestoreDialog - no and not always', async () => {
    expect.assertions(5);

    function runTest() {
      return new Promise((resolve, reject) => {

        showRestoreDialog(yesNo => {
          expect(yesNo).toBe(false);
          expect(getAlwaysLoad()).toBe(false);
          resolve();
        });

        expect($('#modal').get(0).className).toBe('modal-dialog');
        expect($('#dialog .modal-body').attr('data-i18n')).toBe('dialog.restore');
        expect(getAlwaysLoad()).toBe(false);

        $('#dialog input.always').prop('checked', false).trigger('change');
        $('#dialog button.no').trigger('click');
      });
    }

    await runTest();
});

test('showDeleteDialog - yes', async () => {
  expect.assertions(3);

  function runTest() {
    return new Promise((resolve, reject) => {

      showDeleteDialog(yesNo => {
        expect(yesNo).toBe(true);
        resolve();
      });

      expect($('#modal').get(0).className).toBe('modal-dialog');
      expect($('#dialog .modal-body').attr('data-i18n')).toBe('dialog.delete');

      $('#dialog button.yes').trigger('click');
    });
  }

  await runTest();
});

test('showDeleteDialog - no', async () => {
  expect.assertions(3);

  function runTest() {
    return new Promise((resolve, reject) => {

      showDeleteDialog(yesNo => {
        expect(yesNo).toBe(false);
        resolve();
      });

      expect($('#modal').get(0).className).toBe('modal-dialog');
      expect($('#dialog .modal-body').attr('data-i18n')).toBe('dialog.delete');

      $('#dialog button.no').trigger('click');
    });
  }

  await runTest();
});

test('showChallengeDateDialog', async () => {
  expect.assertions(3);

  function runTest() {
    const begin = new Date(import.meta.env.VITE_SUBMIT_DATE);

    return new Promise((resolve, reject) => {

      showChallengeDateDialog();

      expect($('#modal').get(0).className).toBe('modal-dialog');
      expect($('#dialog .modal-body').attr('data-i18n')).toBe('[prepend]dialog.premature');
      expect($('#dialog .modal-body').html()).toBe(`&nbsp;${begin.toLocaleString()}`);
      $('#dialog button.ok').trigger('click');

      resolve();
    });
  }

  await runTest();
});

test('showGuide', async () => {
  expect.assertions(3);

  function runTest() {

    const state = import.meta.env.VITE_STATE;

    return new Promise((resolve, reject) => {

      showGuide();

      import(`../../js/guide/${state}/en.js`).then(guide => {
        expect($('#modal').get(0).className).toBe('guide');
        expect($('#modal h2').attr('data-i18n')).toBe('dialog.guide.title');
        expect($('#dialog .modal-body').html()).toBe(guide.default);
        $('#dialog button.btn-close').trigger('click');
  
        resolve();
      });
    });
  }

  await runTest();
});

test('showProviders', async () => {
  expect.assertions(4);

  function runTest() {

    const table = $('<table id="mock-providers"></table>');

    return new Promise((resolve, reject) => {

      showProviders(table, () => {
        resolve();
      });

      expect($('#modal').get(0).className).toBe('modal-dialog provider');
      expect($('#modal h2').attr('data-i18n')).toBe('dialog.provider.title');
      expect($('#dialog .modal-body').hasClass('loading')).toBe(true);
      expect($('#dialog .modal-body').children().get(0).id).toBe('mock-providers');
      $('#dialog button.btn-close').trigger('click');
    });
  }

  await runTest();
});
