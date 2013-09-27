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

function getMegamenuOffset(title){
  var length = title.length;
  var offset = "";
  var offsets = [[12, "large"], [10, "medium"], [5, "small"]];

  offsets.some(function(config){
    if (length >= config[0]){
      offset = config[1];
      return true;
    }
  });

  return offset;
}

function setMegamenu(id){
  this["megamenu_"+id] = true;
}

module.exports = {
  clearfix: generateClearfix,
  each_with_index: each_with_index,
  "set-title": setTitle,
  "megamenu-offset": getMegamenuOffset,
  "set-megamenu": setMegamenu
};