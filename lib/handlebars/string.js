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
  var last = list.pop();

  return [list.join(", "), last].filter(function(d){ return d; }).join(" et ");
}

module.exports = {
  endsWith: endsWith,
  inline: inlineList
};