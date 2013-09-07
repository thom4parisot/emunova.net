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

function sampleContent(){
  return '<div class="alert alert-warning">' +
    'Ceci est un contenu témoin. <em>Tous les liens menant à un test utilisent cet exemple</em>.' +
  '</div>';
}

module.exports = {
  endsWith: endsWith,
  inline: inlineList,
  "sample-content": sampleContent
};