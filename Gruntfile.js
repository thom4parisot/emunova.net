"use strict";

var path = require("path");

module.exports = function (grunt) {
  var _str = grunt.util._.str;

  function renameSystemUri(dest, src){
    var basename = path.basename(src);
    return dest + (path.basename(path.dirname(src))) + "/" + basename;
  }

  function renameGameUri(dest, src){
    var clean = grunt.util._.compose(_str.slugify, _str.titleize);
    var basepath = path.dirname(src).split('/').concat(path.basename(src, path.extname(src))).map(clean).join('/');

    return dest + basepath;
  }

  grunt.initConfig({
    en: "node_modules/data.emunova.net",

    precache: {
      systems: {
        src: "<%= en %>/systems/*/index.json",
        dest: "dist/data/systems.json",
        options: {
          id: function(file){
            return file.match(/systems\/([^\/]+)/)[1];
          }
        }
      },
      games: {
        expand: true,
        cwd: "<%= en %>",
        src: "games/*",
        ext: ".json",
        dest: "dist/data",
        options: {
          find: "*/index.json",
          id: function(file){
            return file.match(/games\/[^\/]+\/([^\/]+)/)[1];
          }
        }
      }
    },

    assemble: {
      options: {
        assets: "dist/assets",
        layoutdir: "src/layouts",
        engine: "handlebars",
        helpers: ["lib/handlebars/*.js"],
        partials: "src/partials/**/*.hbs",
        extension: ".html",
        data: "dist/data/**/*.json"
      },

      home: {
        src: "package.json",
        dest: "dist/index.html",
        options: {
          layout: "index.hbs"
        }
      },

      systems: {
        expand: true,
        cwd: "<%= en %>",
        src: ["systems/**/index.json"],
        dest: "dist/",
        rename: renameSystemUri,
        options: {
          layout: "systems/index.hbs"
        }
      },
      systems_contents: {
        expand: true,
        cwd: "<%= en %>",
        src: ["systems/**/*.md"],
        dest: "dist/",
        rename: renameSystemUri,
        options: {
          layout: "systems/text-content.hbs"
        }
      },

      games: {
        expand: true,
        cwd: "<%= en %>",
        src: ["systems/**/index.json"],
        rename: function(dest, src){
          return renameSystemUri(dest, src).replace(/^dist/, 'dist/games');
        },
        dest: "dist/",
        options: {
          layout: "games/system.hbs"
        }
      },
      game_entry: {
        expand: true,
        cwd: "<%= en %>",
        src: ["games/**/index.json"],
        rename: renameGameUri,
        dest: "dist/",
        options: {
          layout: "games/entry.hbs"
        }
      },
      game_review: {
        expand: true,
        cwd: "<%= en %>",
        src: ["games/**/reviews/*.md"],
        rename: renameGameUri,
        dest: "dist/",
        options: {
          layout: "games/review.hbs"
        }
      },
      game_ratings: {
        expand: true,
        cwd: "<%= en %>",
        src: ["games/**/index.json"],
        rename: function(dest, src){
          return dest + src.replace('index.json', 'ratings.json');
        },
        dest: "dist/",
        options: {
          layout: "games/ratings.hbs"
        }
      }
    },

    copy: {
      ui: {
        expand: true,
        cwd: "src/assets",
        src: "**/*.{css,js}",
        dest: "dist/assets"
      },
      assets: {
        expand: true,
        cwd: "<%= en %>",
        src: "**/*.{jpeg,jpg,png,gif}",
        rename: renameSystemUri,
        dest: "dist/"
      }
    },

    clean: {
      build: "dist/**/*"
    },

    "gh-pages": {
      options: {
        base: "dist"
      },
      src: '**/*'
    }
  });

  grunt.loadNpmTasks("assemble");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-gh-pages");
  grunt.loadTasks('lib/grunt');

  grunt.registerTask("default", ["clean", "precache", "assemble", "copy"]);
  grunt.registerTask("deploy", ["default", "gh-pages"]);
};