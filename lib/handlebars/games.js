"use strict";

var fs = require("fs");
var path = require("path");
var grunt = require("grunt");
var assemble = require("assemble");
var slugify = grunt.util._.str.slugify;

var sort = require('../sort.js');

/**
 *
 * @param system
 * @param game
 * @param next
 * @returns {Object|*}
 */
function getGameReviews(system, game, next){
  var data = grunt.file.expand('node_modules/data.emunova.net/games/'+system.id+'/'+game.id+'/reviews/*.md').map(function(file){
    var parsedContent = assemble.data.extract(file);
    var review = parsedContent.context;

    review.user = review.user || path.basename(file, ".md");
    review.slug = slugify(review.user);
    review.review = parsedContent.content;

    return review;
  });

  return data.sort(sort.anterating).reduce(function(a, b){
    return a + next.fn(b);
  }, "") || next.inverse(this);
}

function getGameRatings(system, game, includeContent, next){
  var data = grunt.file.expand('node_modules/data.emunova.net/games/'+system.id+'/'+game.id+'/{reviews,ratings}/*.md').map(function(file){
    var parsedContent = assemble.data.extract(file);
    var rating = parsedContent.context;

    rating.user = rating.user || path.basename(file, ".md");
    rating.slug = slugify(rating.user);
    rating.is_review = !!file.match(new RegExp(game.id + "/reviews/"));

    if (includeContent === true){
      rating.review = parsedContent.content;
    }

    return rating;
  });

  return data.sort(sort.chronological).reduce(function(a, b){
    return a + next.fn(b);
  }, "") || next.inverse(this);
}

/**
 *
 */
function getGamesForSystem(system, next){
  var filename = "cache/games/"+ system.id +".json";
  var games = grunt.file.exists(filename) ? grunt.file.readJSON(filename) : {};

  return Object.keys(games).sort(sort.alphabetical).reduce(function(a, b){
    games[b].slug = games[b].id;

    return a + next.fn(games[b]);
  }, "") || next.inverse(this);
}

/**
 * Returns an amount of recent game entries
 *
 * @todo in the future, we will do that with Elastic Search or an index file
 * @param {Object} system
 * @param {Number=} limit
 */
function getRecentGames(system, limit, next){
  var games = grunt
    .file.expand("node_modules/data.emunova.net/games/"+system.id+"/*/index.json")
    .sort(function(a, b){
      return Date.parse(fs.lstatSync(a).mtime) < Date.parse(fs.lstatSync(b).mtime);
    })
    .slice(0, limit || 5)
    .map(function(file){
      var game = grunt.file.readJSON(file);

      game.slug = slugify(path.basename(path.dirname(file)));

      return game;
    });

  return games.reduce(function(a, b){
    return a + next.fn(b);
  }, "") || next.inverse(this);
}

function getBestGames(system, limit, next){
  var filename = "cache/games/"+ system.id +".json";
  var games = grunt.file.exists(filename) ? grunt.file.readJSON(filename) : {};

  return Object.keys(games)
    .map(function(id){ return games[id]; })
    .sort(sort.anterating)
    .slice(0, limit || 5)
    .reduce(function(a, b){
    return a + next.fn(b);
  }, "") || next.inverse(this);
}

function getGameBreakdown(game, next){
  var breakdown = game.rating_breakdown || {};

  var ratings = Array.apply(null, Array(6)).map(function(value, i){
    return { rating: i, count: breakdown[i] || 0 };
  });

  return ratings.sort(sort.anterating).reduce(function(a, b){
    return a + next.fn(b);
  }, "") || next.inverse(this);
}

module.exports = {
  game_reviews: getGameReviews,
  game_ratings: getGameRatings,
  game_breakdown: getGameBreakdown,
  system_games: getGamesForSystem,
  updated_games: getRecentGames,
  best_games: getBestGames
};
