'use strict';

const $ = global.jQuery = require('jquery');
require('bootstrap/transition');
require('bootstrap/collapse');
require('bootstrap/dropdown');

const lzld = require('lazyloadjs');
const DynamicSorter = require('./dynamic-sorter');
const RemoteContent = require('./rss/remote-content');
const SortTable = require('sorttable');
const instantsearch = require('instantsearch.js');
const stars = require('../../../lib/handlebars/ratings').stars;

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

const search = instantsearch({
  appId: 'C5SU6DIDX6',
  apiKey: 'f2a531624b466c569e171f233c98ea3d',
  indexName: 'prod_games',
  protocol: 'https'
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#topbar-search-input',
    autofocus: false,
    queryHook: (query, search) => {
      if (query && !$collapsibleSearch.hasClass('in')) {
	$collapsibleSearch.collapse('show');
      }
      else if (!query && $collapsibleSearch.hasClass('in')) {
	$collapsibleSearch.collapse('hide');
      }

      search(query);
    }
  })
);

const $collapsibleSearch = $('#search-results-wrapper .collapse')

search.addWidget(
  instantsearch.widgets.hits({
    container: '#search-results-wrapper .panel-body',
    hitsPerPage: 12,
    templates: {
      empty: 'Aucun résultat trouvé :-(',
      item: (item) => `<a class="result-link" href="#">
	<span class="result-title">${item._highlightResult.title.value}</span>

	<ul>
	  <li>Super NES</li>
	  <li>${item.released}</li>
	  <li>${stars(item.rating)}</li>
	</ul>
      </a>`,
    },
    cssClasses: {
      root: ['row'],
      item: ['col-lg-4', 'col-sm-6']
    }
  })
);

search.start();
