'use strict';

const $ = global.jQuery = require('jquery');
require('bootstrap/collapse');
require('bootstrap/transition');
require('bootstrap/dropdown');

const lzld = require('lazyloadjs');
const DynamicSorter = require('./dynamic-sorter');
const RemoteContent = require('./rss/remote-content');
const SortTable = require('sorttable');

$('.lazyload img').each((i, el) => lzld(el));
$('table.table-sortable').each((i, el) => SortTable.makeSortable(el));
$('form[data-target]').each((i, el) => {
  new DynamicSorter(el).registerEvents();
});
$('.rss-content').each((i, el) => {
  RemoteContent.create(el.getAttribute('data-source'), el);
});

const $menus = $('#megamenu-system, #megamenu-game');

$menus.on('show.bs.collapse',() => {
  const $others = $menus.not(this);

  $others.collapse('hide').each((i, el) => {
    $(`#nav [href="#${el.getAttribute('id')}"]`).addClass('collapsed');
  });
});
