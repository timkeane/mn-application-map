import {getCurrentLanguage} from '../i18n/i18n';
import {getState} from '../util';

export default function(appendTo) {
  import(`./${getState()}/${getCurrentLanguage()}.js`).then(guide => {
    appendTo.empty().append(guide.default);
  });
}
