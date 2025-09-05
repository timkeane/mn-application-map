import {expect, test} from 'vitest';
import spin from '../../js/i18n/translate';
import {getTranslate} from '../../js/util';

test('translate', () => {
  const languages = JSON.parse(import.meta.env.VITE_LANGUAGES);
  expect.assertions(6 + languages.length);

  spin();

  const translate = getTranslate();
  const button = translate.find('button');
  const dropdown = translate.find('.dropdown-menu');

  expect(translate.hasClass('dropdown')).toBe(true);

  expect(button.attr('id')).toBe('translate');
  expect(button.attr('type')).toBe('button');
  expect(button.attr('data-bs-toggle')).toBe('dropdown');
  expect(button.attr('aria-haspopup')).toBe('true');
  expect(button.attr('aria-expanded')).toBe('false');

  
  languages.forEach(lang => {
    expect(dropdown.find(`a[data-i18n="translate.${lang}"]`).attr('href')).toBe(`./?locale=${lang}`);
  });
});