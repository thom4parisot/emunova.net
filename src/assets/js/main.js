(function(w, d, undefined){
  "use strict";

  var lzld = lazyload();
  [].slice.call(d.querySelectorAll(".lazyload img")).forEach(lzld);

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
          if (event.target.classList.contains("collapsed")){
            event.preventDefault();
            self.handleClick(event.target);
          }
        });
      }
    };

    return new Accordion(menuElement);
  })(d.getElementById("nav"));

  accordion.registerEvents();
})(window, document);