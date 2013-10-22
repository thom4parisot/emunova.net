(function(w, d, $, undefined){
  "use strict";

  var lzld = lazyload();
  $('.lazyload img').each(function(i, el){ lzld(el); });

  $('table.table-sortable').each(function(i, el){ sorttable.makeSortable(el); });

  $('form[data-target]').each(function(i, el){ (new DynamicSorter(el)).registerEvents(); });

  var $menus = $('#megamenu-system, #megamenu-game');

  $menus.on('show.bs.collapse', function(){
    var $others = $menus.not(this);

    $others.collapse('hide').each(function(i, el){
      $('#nav [href="#'+el.getAttribute('id')+'"]').addClass('collapsed');
    });
  });
})(window, document, jQuery);