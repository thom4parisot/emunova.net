"use strict";

var fs = require("fs");
var path = require("path");

function getGameReviews(system_id, game_id, next){
  var data = [
    {slug: "wikipedia", user: "Wikipédia"},
    {slug: "sylvain", user: "Sylvain", rating: 5}
  ];

  return data.sort(function(a, b){ return (a.rating || 0) < (b.rating || 0); }).reduce(function(a, b){
    return a + next.fn(b);
  }, "");
}

module.exports = {
  game_reviews: getGameReviews
};