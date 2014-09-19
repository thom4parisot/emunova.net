(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', (location.host || location.hostname) === 'emunova.net' ? 'UA-44666377-1' : 'UA-44666377-2', 'emunova.net');
ga('send', 'pageview');

(function(w, d, $, undefined){
  "use strict";

  var lzld = lazyload();
  $('.lazyload img').each(function(i, el){ lzld(el); });

  $('table.table-sortable').each(function(i, el){ sorttable.makeSortable(el); });

  $('form[data-target]').each(function(i, el){ (new DynamicSorter(el)).registerEvents(); });

  var $menus = $('#megamenu-system, #megamenu-game');

  $menus.on('show.bs.collapse',function(){
    var $others = $menus.not(this);

    $others.collapse('hide').each(function(i, el){
      $('#nav [href="#'+el.getAttribute('id')+'"]').addClass('collapsed');
    });
  });
})(window, document, jQuery);