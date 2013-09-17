"use strict";

var path = require("path");
var assemble = require("assemble");
var defaultOptions = {
  rename: function(dest, src, id){
    return dest;
  }
};

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

  function parseFile(f){
    var tmp = {};
    var dirname = path.dirname(f);

    switch (path.extname(f)){
      case ".json":
        return grunt.file.readJSON(f);
      break;

      case ".md":
        return assemble.data.readYFM(f).context;
      break;

      case ".jpeg":
      case ".jpg":
      case ".webp":
      case ".gif":
      case ".png":
        tmp.filename = path.basename(f, path.extname(f));
        tmp.infofile = path.dirname(f) + "/" + tmp.filename + ".md";
        tmp.parsedData = grunt.file.exists(tmp.infofile) ? assemble.data.readYFM(tmp.infofile) : {};

        return _.extend({
          "title": tmp.filename,
          "filename": path.relative(dirname, f)
        }, tmp.parsedData.context);
      break;
    }
  }

  grunt.registerMultiTask("precache", function(){
    var task = grunt.task.current;
    var options = task.options(defaultOptions);
    var done = this.async();

    grunt.template.addDelimiters('precacher', '{%', '%}');

    async.forEach(this.files, function(config, nextTarget){
      var objects = {};
      var files = (options.find ? grunt.file.expand(config.src[0] + "/" + options.find) : config.src);

      if (!files.length){
        return nextTarget();
      }

      async.forEach(files, function sourceFileIterator(file, nextObject){
        var id = options.id(file);
        objects[id] = parseFile(file);
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

          matchedFiles = grunt.file.expand(location).map(parseFile);

          Object.keys(options.compute[pattern]).forEach(function(newPropertyName){
            var callback = options.compute[pattern][newPropertyName];

            objects[id][newPropertyName] = callbacks[callback](matchedFiles);
          });

          nextFile();
        }, nextObject);

      }, nextTarget);

      var dest = options.rename(config.dest, config.src);
      grunt.log.ok("Cached:", dest);
      grunt.file.write(dest, JSON.stringify(objects, null, 2));
    }, done);
  });
};