import {expect, test} from 'vitest';
import init, {getCurrentLanguage} from '../../js/i18n/i18n';

const state = import.meta.env.VITE_STATE;

test('init - defaultLocale', async () => {
  expect.assertions(2);

  window.location = 'https://bead.org/';

  const resources = await init();
  const en = await import(`../../js/i18n/${state}/en.js`);

  expect(resources.en).toBe(en);
  expect(getCurrentLanguage()).toBe('en');
});
