"use strict";

const path = require('path');
const yfm = require('assemble-yaml');
const _ = require('lodash');
const slugify = _.kebabCase;

const defaultOptions = {
  rename: function(dest, src, id){
    return dest;
  }
};

module.exports = function(grunt){
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
      return files.map(f => f.filename );
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

      var count = 0;
      var mean = files
        .filter(function(data){ return isNaN(parseFloat(data.rating, 10)) === false; })
        .reduce(function(a, b){  ++count; return a + b.rating; }, 0) ;

      return Number((mean / count).toString().replace(/\.(\d)(\d+)$/, function(m, dec){
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
        return yfm.extract(f).context;
      break;

      case ".jpeg":
      case ".jpg":
      case ".webp":
      case ".gif":
      case ".png":
        tmp.filename = path.basename(f, path.extname(f));
        tmp.infofile = path.dirname(f) + "/" + tmp.filename + ".md";
        tmp.parsedData = grunt.file.exists(tmp.infofile) ? yfm.extract(tmp.infofile).context : {};

        return _.extend({
          "title": tmp.filename,
          "filename": path.relative(dirname, f)
        }, tmp.parsedData);
      break;
    }
  }

  grunt.registerMultiTask("precache", function(){
    var task = grunt.task.current;
    var options = task.options(defaultOptions);
    var done = this.async();

    grunt.template.addDelimiters('precacher', '{%', '%}');

    this.files.forEach(config => {
      const objects = {};
      const files = (options.find ? grunt.file.expand(config.src[0] + "/" + options.find) : config.src);

      if (!files.length){
        return nextTarget();
      }

      files.forEach(file => {
        var id = options.id(file);
        var parsedData = parseFile(file);
        parsedData.id = id;
        parsedData.url = options.url(file, parsedData);

        if (objects[id] === undefined){
          objects[id] = {}
        }

        if (options.stack === true){
          const slug = slugify(path.basename(file, path.extname(file)));

          parsedData.id = slug;
          objects[id][slug] = parsedData;
        }
        else{
          objects[id] = parsedData;
        }

        Object.keys(options.compute || {}).forEach(pattern => {
          const location = grunt.template.process(pattern, {
            delimiters: "precacher",
            data: {
              data: grunt.config.get('datasource'),
              dirname: path.dirname(file),
              self: objects[id]
            }
          });

          const matchedFiles = grunt.file.expand(location).map(parseFile);

          Object.keys(options.compute[pattern]).forEach(function(newPropertyName){
            var callback = options.compute[pattern][newPropertyName];

            objects[id][newPropertyName] = callbacks[callback](matchedFiles);
          });
        });
      });

      const dest = options.rename(config.dest, config.src);

      grunt.log.ok("Cached:", dest);
      grunt.file.write(dest, JSON.stringify(objects, null, 2));
      done();
    });
  });
};
