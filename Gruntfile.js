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
    datasource: "node_modules/data.emunova.net",

    precache: {
      systems: {
        src: "<%= datasource %>/systems/*/index.json",
        dest: "dist/data/systems.json",
        options: {
          id: function(file){
            return file.match(/systems\/([^\/]+)/)[1];
          },
          compute: {
            "{%= data %}/systems/{%= self.id %}/images/**/*.{jpg,png,gif,jpeg,webp}": {
              "images_count": "count"
            },
            "{%= data %}/games/{%= self.id %}/*/index.json": {
              "games_count": "count"
            },
            "{%= data %}/games/{%= self.id %}/*/reviews/*.md": {
              "reviews_count": "count"
            },
            "{%= data %}/games/{%= self.id %}/*/ratings/*.md": {
              "comments_count": "count"
            }
          }
        }
      },
      images: {
        expand: true,
        cwd: "<%= datasource %>/systems",
        src: "*",
        ext: ".json",
        dest: "dist/data",
        options: {
          find: "images/**/*.{jpg,png,gif,jpeg,webp}",
          rename: function(dest){
            return dest.replace(/data\//, 'data/images-');
          },
          id: function(file){
            var f = file.match(/images\/([^\/]+)/)[1];
            return _str.slugify(path.basename(f, path.extname(f)));
          }
        }
      },
      games: {
        expand: true,
        cwd: "<%= datasource %>",
        src: "games/*",
        ext: ".json",
        dest: "dist/data",
        options: {
          find: "*/index.json",
          id: function(file){
            return file.match(/games\/[^\/]+\/([^\/]+)/)[1];
          },
          compute: {
            "{%= dirname %}/reviews/*.md": {
              "reviews_count": "count"
            },
            "{%= dirname %}/{ratings,reviews}/*.md": {
              "comments_count": "count",
              "rating": "ratings",
              "rating_breakdown": "breakdown"
            }
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
        cwd: "<%= datasource %>",
        src: ["systems/**/index.json"],
        dest: "dist/",
        rename: renameSystemUri,
        options: {
          layout: "systems/index.hbs"
        }
      },
      systems_images: {
        expand: true,
        cwd: "<%= datasource %>",
        src: ["systems/**/index.json"],
        dest: "dist/",
        rename: function(dest, src){
          return renameSystemUri(dest, src).replace(/index.json$/, 'images/index.json');
        },
        options: {
          layout: "systems/images.hbs"
        }
      },
      systems_contents: {
        expand: true,
        cwd: "<%= datasource %>",
        src: ["systems/**/*.md"],
        dest: "dist/",
        rename: renameSystemUri,
        options: {
          layout: "systems/text-content.hbs"
        }
      },

      games: {
        expand: true,
        cwd: "<%= datasource %>",
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
        cwd: "<%= datasource %>",
        src: ["games/**/index.json"],
        rename: renameGameUri,
        dest: "dist/",
        options: {
          layout: "games/entry.hbs"
        }
      },
      game_review: {
        expand: true,
        cwd: "<%= datasource %>",
        src: ["games/**/reviews/*.md"],
        rename: renameGameUri,
        dest: "dist/",
        options: {
          layout: "games/review.hbs"
        }
      },
      game_ratings: {
        expand: true,
        cwd: "<%= datasource %>",
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
      gh: {
        expand: true,
        cwd: "src/",
        src: ["CNAME", "robots.txt"],
        dest: "dist/"
      },
      ui: {
        expand: true,
        cwd: "src/assets",
        src: "**/*.{css,js}",
        dest: "dist/assets"
      },
      assets: {
        expand: true,
        cwd: "<%= datasource %>",
        src: "**/*.{jpeg,jpg,png,gif,wepb}",
        rename: function(dest, src){
          return dest + src.replace(/^systems\//, '');
        },
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
