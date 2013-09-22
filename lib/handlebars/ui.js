"use strict";

var _str = require("grunt").util._.str;

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

function setTitle(){
  var args = [].slice.call(arguments);
  var next = args.pop();
  var title = args.shift();

  if (!this["title"]){
    this["title"] = _str.sprintf.apply(this, [title].concat(args));
  }
}

module.exports = {
  clearfix: generateClearfix,
  each_with_index: each_with_index,
  "set-title": setTitle
};