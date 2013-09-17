"use strict";

var grunt = require("grunt");
var assemble = require("assemble");
var path = require("path");

function getImages(system){
  return this['images-'+system.id] || {};
}

function getSystemImages(system, description_or_limit, next){
  var images = getImages.call(this, system);
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
        image.description = assemble.data.readYFM(file).content;
      }
    }

    return a + next.fn(image);
  }, "");
}

module.exports = {
  system_images: getSystemImages
};