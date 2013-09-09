"use strict";

module.exports = function(grunt){
  grunt.registerMultiTask("precache", function(){
    var task = grunt.task.current;
    var options = task.options();

    this.files.forEach(function(config){
      var objects = {};

      (options.find ? grunt.file.expand(config.src[0] + "/" + options.find) : config.src).forEach(function(file){
        var id = options.id(file);
        objects[id] = grunt.file.readJSON(file);
        objects[id].id = id;
      });

      grunt.file.write(config.dest, JSON.stringify(objects, null, 2));
    });
  });
};