import $ from 'jquery';
import {expect, test} from 'vitest';
import guide from '../../js/guide/guide';

const state = import.meta.env.VITE_STATE;

test('guide', async () => {
  expect.assertions(1);

  const guideHtml = await import(`../../js/guide/${state}/en.js`);

  function runTest() {
    return new Promise((resolve, reject) => {
      const div = $('<div></div>');
      guide(div);
      setTimeout(() => {
        expect(div.html()).toBe(guideHtml.default);
        resolve();
      }, 100);
    });
  }
  await runTest();
});