(function(w, d, undefined){
  "use strict";

  var lzld = lazyload();
  [].slice.call(d.querySelectorAll(".lazyload img")).forEach(lzld);
})(window, document);