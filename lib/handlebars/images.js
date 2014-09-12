"use strict";

var grunt = require("grunt");
var yfm = require("assemble-yaml");
var path = require("path");

function getSystemImages(system, description_or_limit, next){
  var filename = "cache/images-"+ system.id +".json";
  var images = grunt.file.exists(filename) ? grunt.file.readJSON(filename) : {};
  var description = description_or_limit === true;
  var limit = parseInt(description_or_limit, 10) === description_or_limit ? description_or_limit : 0;
  var keys = Object.keys(images);

  if (limit){
    keys = keys.slice(0, limit);
  }

  return keys.reduce(function(a, b, i){
    var image = images[b];
    image.index = i;

    if (description){
      var file = "node_modules/data.emunova.net/systems/"+system.id+"/images/"+path.basename(image.filename, path.extname(image.filename))+".md";

      if (grunt.file.exists(file)){
        image.description = yfm.extract(file).content;
      }
    }

    return a + next.fn(image);
  }, "");
}

function getGameImages(system, game, description_or_limit, next){
  var filename = "cache/games/games-images-"+ system.id +".json";
  var images = grunt.file.exists(filename) ? grunt.file.readJSON(filename)[game.id] || {} : {};
  var description = description_or_limit === true;
  var limit = parseInt(description_or_limit, 10) === description_or_limit ? description_or_limit : 0;
  var keys = Object.keys(images);

  if (limit){
    keys = keys.slice(0, limit);
  }

  //temporary workaround because we have a game named 'constructor' on PlayStation
  //it even does not appear in the precache
  if (game.id === 'constructor'){
    return "";
  }

  return keys.reduce(function(a, b, i){
    var image = images[b];
    image.index = i;

    if (description){
      var file = "node_modules/data.emunova.net/games/"+system.id+"/"+game.id+"/images/"+path.basename(image.filename, path.extname(image.filename))+".md";

      if (grunt.file.exists(file)){
        image.description = yfm.extract(file).content;
      }
    }

    return a + next.fn(image);
  }, "");
}

function alterImageUrl(image, profile){
  var extname = path.extname(image);

  return path.basename(image, extname) + "-" + profile + extname;
}

module.exports = {
  game_images: getGameImages,
  system_images: getSystemImages,
  image_url: alterImageUrl
};