"use strict";


function endsWith(string, end, next){
  if (string.match(new RegExp(end + "$"))){
    return next.fn(this);
  }
  else{
    return next.inverse(this);
  }
}

function inlineList(list){
  return list.join(", ");
}

module.exports = {
  endsWith: endsWith,
  inline: inlineList
};