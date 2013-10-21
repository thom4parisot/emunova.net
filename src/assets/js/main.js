(function(w, d, $, undefined){
  "use strict";

  var lzld = lazyload();
  $('.lazyload img').each(lzld);

  $('table.table-sortable').each(sorttable.makeSortable);

  var accordion = (function(menuElement){
    var Accordion = function(container){
      this.container = container;
    };

    function getMegamenu(el){
      return document.querySelector(".megamenu-"+el.getAttribute("data-target"));
    }

    Accordion.prototype = {
      activate: function activateElement(el){
        el.classList.remove("collapsed");
        getMegamenu(el).classList.add("in");
      },
      deactivate: function deactivateElement(el){
        el.classList.add("collapsed");
        getMegamenu(el).classList.remove("in");
      },
      deactivateAll: function deactivateAllElement(){
        [].slice.call(this.container.querySelectorAll(".accordion-toggle")).forEach(this.deactivate);
      },
      handleClick: function handleClick(el){
        this.deactivateAll();
        this.activate(el);
      },
      registerEvents: function registerEvents(){
        var self = this;

        this.container.addEventListener("click", function(event){
          [event.target.parentNode, event.target].some(function(el){
            if (el.classList.contains("collapsed")) {
              event.preventDefault();
              self.handleClick(el);
              return true;
            }
          });
        });
      }
    };

    return new Accordion(menuElement);
  })(d.getElementById("nav"));

  accordion.registerEvents();

  $('form[data-target]').each(function(i, el){ (new DynamicSorter(el)).registerEvents(); });
})(window, document, jQuery);