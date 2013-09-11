"use strict";

var path = require("path");

module.exports = function(grunt){
  grunt.registerMultiTask("precache", function(){
    var task = grunt.task.current;
    var options = task.options();

    grunt.template.addDelimiters('precacher', '{%', '%}');

    this.files.forEach(function(config){
      var objects = {};

      (options.find ? grunt.file.expand(config.src[0] + "/" + options.find) : config.src).forEach(function(file){
        var id = options.id(file);
        objects[id] = grunt.file.readJSON(file);
        objects[id].id = id;

        if (options.count){
          Object.keys(options.count).forEach(function(property){
            var location = grunt.template.process(options.count[property], {
              delimiters: "precacher",
              data: {
                dirname: path.dirname(file),
                system: objects[id]
              }
            });

            objects[id][property] = grunt.file.expand(location).length;
          });
        }
      });

      grunt.file.write(config.dest, JSON.stringify(objects, null, 2));
    });
  });
};