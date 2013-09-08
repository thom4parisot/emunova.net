"use strict";

var fs = require("fs");
var path = require("path");
var grunt = require("grunt");
var assemble = require("assemble");
var slugify = grunt.util._.str.slugify;

function getGameReviews(system, game, next){
  var data = [
    {slug: "wikipedia", user: "Wikipédia"},
    {slug: "sylvain", user: "Sylvain", rating: 5}
  ];

  var data = grunt.file.expand('node_modules/data.emunova.net/games/'+system.id+'/'+game.id+'/reviews/*.md').map(function(file){
    var review = assemble.data.readYFM(file).context;

    review.user = review.user || path.basename(file, ".md");
    review.slug = slugify(review.user);

    return review;
  });

  return data.sort(function(a, b){ return (a.rating || 0) < (b.rating || 0); }).reduce(function(a, b){
    return a + next.fn(b);
  }, "");
}

module.exports = {
  game_reviews: getGameReviews
};