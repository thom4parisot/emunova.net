(function(w, d, undefined){
  "use strict";

  var lzld = lazyload();
  [].slice.call(d.querySelectorAll(".lazyload img")).forEach(lzld);

  var accordion = (function(menuElement){
    var Accordion = function(container){
      this.container = container;
    };

    Accordion.prototype = {
      activate: function activateElement(el){

      },
      deactivateAll: function deactivateAllElement(){

      },
      handleClick: function handleClick(el){
        el.classList.remove("collapsed");
        document.querySelector(".megamenu-"+el.getAttribute("data-target")).classList.add("in");
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