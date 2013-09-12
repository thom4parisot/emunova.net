"use strict";

var path = require("path");

module.exports = function(grunt){
  var async = grunt.util.async;

  grunt.registerMultiTask("precache", function(){
    var task = grunt.task.current;
    var options = task.options();
    var done = this.async();

    grunt.template.addDelimiters('precacher', '{%', '%}');

    async.forEach(this.files, function(config, nextTarget){
      var objects = {};
      var files = (options.find ? grunt.file.expand(config.src[0] + "/" + options.find) : config.src);

      async.forEach(files, function(file, nextObject){
        var id = options.id(file);
        objects[id] = grunt.file.readJSON(file);
        objects[id].id = id;

        if (options.count){
          async.forEach(Object.keys(options.count), function(property, nextFile){
            var location = grunt.template.process(options.count[property], {
              delimiters: "precacher",
              data: {
                dirname: path.dirname(file),
                system: objects[id]
              }
            });

            objects[id][property] = grunt.file.expand(location).length;
            nextFile();
          }, nextObject);
        }
        else{
          nextObject();
        }
      }, nextTarget);

      grunt.log.ok("Cached:", config.dest);
      grunt.file.write(config.dest, JSON.stringify(objects, null, 2));
    }, done);
  });
};