"use strict";

var path = require("path");
var assemble = require("assemble");

module.exports = function(grunt){
  var async = grunt.util.async;
  var _ = grunt.util._;
  var callbacks = {
    /**
     *
     * @param files
     * @returns {Number}
     */
    count: function count(files){
      return files.length;
    },
    list: function list(files){
      return files.map(function(f){ return f.filename });
    },
    /**
     *
     * @param files
     * @returns {Number}
     */
    ratings: function ratings(files){
      if (!files.length){
        return null;
      }

      var mean = files
        .filter(function(data){ return isNaN(parseFloat(data.rating, 10)) === false; })
        .reduce(function(a, b){ return a + b.rating; }, 0) ;

      return Number((mean / files.length).toString().replace(/\.(\d)(\d+)$/, function(m, dec){
        return "." + (dec < 5 ? 0 : 5);
      }));
    },
    /**
     *
     * @param {Onject} files
     */
    breakdown: function breakdown(files){
      var data = {};

      files
        .filter(function(d){ return isNaN(parseFloat(d.rating, 10)) === false; })
        .forEach(function(d){
          var rating = Math.round(d.rating - 0.001);

          data[rating] = (data[rating] || 0)+1;
        });

      return Object.keys(data).length ? data : null;
    }
  };

  grunt.registerMultiTask("precache", function(){
    var task = grunt.task.current;
    var options = task.options();
    var done = this.async();

    grunt.template.addDelimiters('precacher', '{%', '%}');

    async.forEach(this.files, function(config, nextTarget){
      var objects = {};
      var files = (options.find ? grunt.file.expand(config.src[0] + "/" + options.find) : config.src);

      async.forEach(files, function sourceFileIterator(file, nextObject){
        var dirname = path.dirname(file);
        var id = options.id(file);
        objects[id] = grunt.file.readJSON(file);
        objects[id].id = id;

        async.forEach(Object.keys(options.compute || {}), function computeIterator(pattern, nextFile){
          var location, matchedFiles;

          location = grunt.template.process(pattern, {
            delimiters: "precacher",
            data: {
              data: grunt.config.get('datasource'),
              dirname: path.dirname(file),
              self: objects[id]
            }
          });

          matchedFiles = grunt.file.expand(location)
            .map(function(f){
              switch (path.extname(f)){
                case ".md":
                  return assemble.data.readYFM(f).context;
                break;

                case ".jpeg":
                case ".jpg":
                case ".webp":
                case ".gif":
                case ".png":
                  return _.extend({
                    "title": path.basename(f, path.extname(f)),
                    "filename": path.relative(dirname, f)
                  }, {});
                break;

                default:
                  return {};
                break;
              }
            });

          if (Array.isArray(matchedFiles) && matchedFiles.length && matchedFiles[0].title){
            console.log(matchedFiles);
          }

          Object.keys(options.compute[pattern]).forEach(function(newPropertyName){
            var callback = options.compute[pattern][newPropertyName];

            objects[id][newPropertyName] = callbacks[callback](matchedFiles);
          });

          nextFile();
        }, nextObject);

      }, nextTarget);

      grunt.log.ok("Cached:", config.dest);
      grunt.file.write(config.dest, JSON.stringify(objects, null, 2));
    }, done);
  });
};