import $ from 'jquery';
import {columns, getTranslate} from '../util';

function removeRow(event) {
  const feature = $(event.target).data('feature');
  $(`#table-${feature.getId()}`).remove();
}

export function viewAsTable(challenges, removeFunction) {
  const table = $('<table class="table"><thead><tr></tr></thead><tbody></tbody><table>');
  const headRow = table.find('thead tr');
  const tbody = table.find('tbody');

  columns.forEach(column => {
    const name = column.name;
    const prop = column.prop;
    const th = $(`<th class="${prop || ''}"></th>`);
    if (name !== undefined || column.first) {
      headRow.append(th);
      if (!column.first) {
        th.attr('data-i18n', `${name};[title]${name}`);
      }
    }
  });

  challenges.forEach(feature => {
    const id = feature.getId();
    const tr = $(`<tr id="table-${id}"></tr>`);
    tbody.append(tr);
    columns.forEach(column => {
      const prop = column.prop;
      const td = $(`<td class="${prop || ''}"></td>`);
      if (column.first) {
        const remove = $(`<img role="button" src="img/trash.svg" data-i18n="[alt]btn.remove_challenge.name;[title]btn.remove_challenge.name">`)
          .data('removeFunction', removeFunction)
          .data('feature', feature)
          .on('click', removeFunction)
          .on('click', removeRow);
        td.append(remove);
        tr.append(td);
      } else if (prop !== undefined) {
        const value = feature.get(prop) !== undefined ? feature.get(prop) : column.value;
        td.html(value).addClass(value === undefined ? 'empty' : '');
        tr.append(td);
      }
    });
  });

  const container = $('#container');
  const div = $('<div class="challenge-table" style="display:none"></div>');
  const button = $('<button class="btn btn-primary back" data-i18n="[aria-label]btn.back.name;[title]btn.back.name"></button>')
    .on('click', () => {
      $('body').removeClass('challenge-table');
      div.slideUp(() => {
        getTranslate().fadeIn();
        div.remove();
        container.attr('aria-hidden', false);
      });
    });

  div.append(table)
    .css('top', container.get(0).offsetTop + 'px');

  $('body').addClass('challenge-table').append(div);
  $(table.find('thead th').get(0)).append(button);

  getTranslate().fadeOut();
  div.localize().slideDown(() => {
    const thead = table.find('thead');
    const divHeight = div.height();
    const divPadTop = parseInt(div.css('padding-top'));
    const divPadBottom = parseInt(div.css('padding-bottom'));
    const theadHeight = thead.height();
    const theadPadTop = parseInt(thead.css('padding-top'));
    const theadPadBottom = parseInt(thead.css('padding-bottom'));
    tbody.height(divHeight - divPadTop - divPadBottom - theadHeight - theadPadTop - theadPadBottom);
    container.attr('aria-hidden', true);
  });

}