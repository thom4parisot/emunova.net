"use strict";

function each_with_index(object, next) {
  return Object.keys(object).reduce(function(a, b, i){
    object[b].index = i;

    return a + next.fn(object[b]);
  }, "");
}

function generateClearfix(index, options){
  if (options.hash.incr){
    index += options.hash.incr;
  }

  return index % options.hash.limit ? "" : '<div class="clearfix"></div>';
}

module.exports = {
  clearfix: generateClearfix,
  each_with_index: each_with_index
};