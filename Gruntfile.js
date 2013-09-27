"use strict";

var path = require("path");

module.exports = function (grunt) {
  var _str = grunt.util._.str;

  function renameSystemUri(dest, src){
    var basename = path.basename(src);
    return dest + (path.basename(path.dirname(src))) + "/" + basename;
  }

  function renameGameUri(dest, src){
    return dest + src.replace(/^(games)\/([^\/]+)/, "$2/$1");
  }

  grunt.initConfig({
    datasource: "node_modules/data.emunova.net",

    precache: {
      systems: {
        src: "<%= datasource %>/systems/*/index.json",
        dest: "cache/systems.json",
        options: {
          id: function(file){
            return file.match(/systems\/([^\/]+)/)[1];
          },
          compute: {
            "{%= dirname %}/images/**/*.{jpg,png,gif,jpeg,webp}": {
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
        dest: "cache",
        options: {
          find: "images/**/*.{jpg,png,gif,jpeg,webp}",
          rename: function(dest){
            return dest.replace(/cache\//, 'cache/images-');
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
        dest: "cache",
        options: {
          find: "*/index.json",
          id: function(file){
            return file.match(/games\/[^\/]+\/([^\/]+)/)[1];
          },
          compute: {
            "{%= dirname %}/images/**/*.{jpg,png,gif,jpeg,webp}": {
              "images_count": "count"
            },
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
      },
      game_images: {
        expand: true,
        cwd: "<%= datasource %>",
        src: "games/*",
        ext: ".json",
        dest: "cache",
        options: {
          stack: true,
          find: "*/images/**/*.{jpg,png,gif,jpeg,webp}",
          rename: function(dest){
            return dest.replace(/games\//, 'games/games-images-');
          },
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
        data: "cache/systems.json"
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
        src: "<%= assemble.systems.src %>",
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
        src: "<%= assemble.systems.src %>",
        rename: function(dest, src){
          return renameSystemUri(dest, src).replace(/index.json$/, 'games/index.json');
        },
        dest: "dist/",
        options: {
          layout: "systems/games.hbs"
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
        src: "<%= assemble.game_entry.src %>",
        rename: function(dest, src){
          return renameGameUri(dest, src).replace('index.json', 'ratings.json');
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
        flatten: true,
        cwd: "src/",
        src: ["CNAME", "robots.txt", "assets/favicon.ico"],
        dest: "dist/"
      },
      ui: {
        expand: true,
        cwd: "src/assets",
        src: [
          "**/*",
          "!*.js"
        ],
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

    uglify: {
      components: {
        src: [
          "bower_components/lazyload/build/lazyload.min.js",
          "bower_components/sorttable/sorttable.js",
          "src/assets/js/main.js"
        ],
        dest: "dist/assets/js/main.min.js"
      }
    },

    responsive_images: {
      options: {
        sizes: [
          {
            name: "sq",
            width: 170,
            height: 170,
            quality: 0.5
          },
          {
            name: "md",
            width: 270,
            quality: 0.8
          }
        ]
      },
      systems: {
        expand: true,
        cwd: "<%= datasource %>/systems",
        src: "**/*.{jpg,png,gif,jpeg,webp}",
        dest: "dist/"
      }/*,
      games: {
        expand: true,
        cwd: "<%= datasource %>/games",
        src: "**//*.{jpg,png,gif,jpeg,webp}",
        dest: "dist/",
        rename: function(dest, src){
          var parts = src.split("/");
          parts = [].concat(parts.slice(0, 1), "games", parts.slice(1));

          return dest + parts.join("/");
        }
      }*/
    },

    clean: {
      precache: "cache/**/*",
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
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-gh-pages");
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadTasks('lib/grunt');

  grunt.registerTask("default", ["clean", "precache", "assemble", "responsive_images", "copy"]);
  grunt.registerTask("deploy", ["default", "gh-pages"]);
  grunt.registerTask("deploy-fast", ["gh-pages"]);
};
