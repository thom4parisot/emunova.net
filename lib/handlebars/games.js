"use strict";

var fs = require("fs");
var path = require("path");
var grunt = require("grunt");
var assemble = require("assemble");
var slugify = grunt.util._.str.slugify;

function getGameReviews(system, game, next){
  var data = grunt.file.expand('node_modules/data.emunova.net/games/'+system.id+'/'+game.id+'/reviews/*.md').map(function(file){
    var review = assemble.data.readYFM(file).context;

    review.user = review.user || path.basename(file, ".md");
    review.slug = slugify(review.user);

    return review;
  });

  return data.sort(function(a, b){ return (a.rating || 0) < (b.rating || 0); }).reduce(function(a, b){
    return a + next.fn(b);
  }, "") || next.inverse(this);
}

function getGamesForSystem(system, next){
  var data = grunt.file.expand("node_modules/data.emunova.net/games/"+system.id+"/*/index.json").map(function(file){
    var game = grunt.file.readJSON(file);

    game.slug = slugify(path.basename(path.dirname(file)));

    return game;
  });

  return data.sort(function(a, b){ return a.slug > b.slug }).reduce(function(a, b){
    return a + next.fn(b);
  }, "") || next.inverse(this);
}

module.exports = {
  game_reviews: getGameReviews,
  system_games: getGamesForSystem
};