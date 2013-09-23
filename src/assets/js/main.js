(function(w, d, undefined){
  "use strict";

  var lzld = lazyload();
  [].slice.call(d.querySelectorAll(".lazyload img")).forEach(lzld);

  d.getElementById("nav").addEventListener("click", function(event){
    if (event.target.classList.contains("collapsed")){
      event.preventDefault();

      event.target.classList.remove("collapsed");
      document.querySelector(".megamenu-"+event.target.dataset.target).classList.add("in");
    }
  });
})(window, document);