"use strict";

function each_with_index(object, next) {
  return Object.keys(object).reduce(function(a, b, i){
    object[b].index = i;

    return a + next.fn(object[b]);
  }, "");
}

function generateClearfix(index, limit, next){
  index++;

  return index % limit ? next.inverse(this) : next.fn(this);
}

module.exports = {
  clearfix: generateClearfix,
  each_with_index: each_with_index
};