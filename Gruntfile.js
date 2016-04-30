"use strict";

var path = require("path");

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  var _str = grunt.util._.str;

  function renameSystemUri(dest, src){
    var basename = path.basename(src);
    return dest + (path.basename(path.dirname(src))) + "/" + basename;
  }

  function renameGameUri(dest, src){
    return dest + src.replace(/^(games)\/([^\/]+)/, "$2/$1");
  }

  grunt.initConfig({
    datasource: process.env.DATA_DIR || "node_modules/data.emunova.net",
    dest: process.env.BUILD_DIR || "tmp/build",
    systems: grunt.option('system') || '*',
    game: grunt.option('game') || '*',
    version: 'v' + require('./package.json').version,

    precache: {
      systems: {
        src: "<%= datasource %>/systems/<%= systems %>/index.json",
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
            }
          }
        }
      },
      images: {
        expand: true,
        cwd: "<%= datasource %>/systems",
        src: "<%= systems %>",
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
        src: "games/<%= systems %>",
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
        src: "games/<%= systems %>",
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
        assets: "<%= dest %>/assets/<%= version %>",
        layoutdir: "src/layouts",
        helpers: ["lib/handlebars/*.js"],
        partials: "src/partials/**/*.hbs",
        extension: ".html",
        layout: "default.hbs"
      },

      home: {
        src: "package.json",
        dest: "<%= dest %>/index.html",
        options: {
          layout: "index.hbs"
        }
      },

      systems: {
        expand: true,
        cwd: "<%= datasource %>",
        src: "systems/<%= systems %>/index.json",
        dest: "<%= dest %>/",
        rename: renameSystemUri,
        options: {
          layout: "systems/index.hbs"
        }
      },
      systems_images: {
        expand: true,
        cwd: "<%= datasource %>",
        src: "<%= assemble.systems.src %>",
        dest: "<%= dest %>/",
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
        src: "systems/<%= systems %>/*.md",
        dest: "<%= dest %>/",
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
        dest: "<%= dest %>/",
        options: {
          layout: "systems/games.hbs"
        }
      },
      game_entry: {
        expand: true,
        cwd: "<%= datasource %>",
        src: "games/<%= systems %>/<%= game %>/index.json",
        rename: renameGameUri,
        dest: "<%= dest %>/",
        options: {
          layout: "games/index.hbs"
        }
      },
      game_review: {
        expand: true,
        cwd: "<%= datasource %>",
        src: "games/<%= systems %>/<%= game %>/reviews/*.md",
        rename: renameGameUri,
        dest: "<%= dest %>/",
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
        dest: "<%= dest %>/",
        options: {
          layout: "games/ratings.hbs"
        }
      },
      contents: {
        expand: true,
        cwd: "src/contents",
        src: "**/*.md",
        dest: "<%= dest %>/"
      }
    },

    copy: {
      gh: {
        expand: true,
        flatten: true,
        cwd: "src/",
        src: ["CNAME", "*.*", "assets/favicon.ico", "dist/*"],
        dest: "<%= dest %>/"
      },
      ui: {
        expand: true,
        cwd: "src/assets",
        src: [
          "**/*",
          "!less/**/*",
          "!js/**/*"
        ],
        dest: "<%= dest %>/assets/<%= version %>"
      }
    },

    less: {
      options: {
        compress: true,
        //report: "gzip",
        paths: [
          "src/assets/less/lib",
          "src/assets/iconfont/css",
          "node_modules/bootstrap/less"
        ]
      },
      components: {
        expand: true,
        cwd: "src/assets/less",
        src: "*.less",
        ext: ".css",
        dest: "<%= dest %>/assets/<%= version %>/css"
      }
    },

    responsive_images: {
      options: {
        sizes: [
          {
            name: "sq",
            width: 170,
            height: 170,
            quality: 50
          },
          {
            name: "md",
            width: 270,
            quality: 80,
            upscale: true
          }
        ]
      },
      systems: {
        expand: true,
        cwd: "<%= datasource %>/systems",
        src: "**/*.{jpg,png,gif,jpeg,webp}",
        dest: "<%= dest %>/"
      }
    },

    shell: {
      clean: {
        command: [
          "rm -rf ./cache/*",
          "rm -rf ./tmp/build"
        ].join('&&')
      },
      system_images: {
        options: {
          stdout: true
        },
        command: [
          "for file in $(find ./node_modules/data.emunova.net/systems -type f \\( -name '*.jpeg' -o -name '*.gif' -o -name '*.jpg' -o -name '*.png' \\))",
            "do dest=./tmp/build/${file#*./node_modules/data.emunova.net/systems/}",
            "mkdir -p $(dirname $dest) && cp $file $dest",
          "done"
        ].join('; ')
      },
      game_images: {
        options: {
          stdout: true
        },
        command: [
          "for file in $(find ./node_modules/data.emunova.net/games -type f \\( -name '*.jpeg' -o -name '*.gif' -o -name '*.jpg' -o -name '*.png' \\))",
          "do dest=./tmp/build/${file#*./node_modules/data.emunova.net/games/}",
            "mkdir -p $(dirname $dest) && cp $file $dest",
          "done"
        ].join('; ')
      }
    },

    uncss: {
      dist: {
        options: {
          ignoreSheets: [/fonts.css/],
          ignore: [
            // static menu dropdown
            '.open',
            '.open>.dropdown-menu',
            // element toggle
            '.hidden',
            '.active',
            '.collapsed',
            '.sr-only',
            // news loaders
            '/^.progress-bar/',
            '.loaded',
            '.error'
          ],
          timeout: 3000
        },
        files: {
          '<%= dest %>/assets/<%= version %>/css/core.css': [
            '<%= dest %>/*.html',
            '<%= dest %>/about/*.html',
            '<%= dest %>/3do/**/*.html'
          ]
        }
      }
    },

    concurrent: {
      ui: [
        "less"
      ],
      content: [
        "assemble:home",
        "assemble:contents",
        "assemble:systems",
        "assemble:games",
        "assemble:systems_images",
        "assemble:systems_contents",
        "assemble:game_entry",
        "assemble:game_review",
        "assemble:game_ratings"
      ],
      options: {
        limit: 1,
        logConcurrentOutput: true
      }
    }
  });

  grunt.loadNpmTasks("assemble");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks("grunt-uncss");
  grunt.loadTasks('lib/grunt');

  grunt.registerTask("default", ["build-content"]);

  grunt.registerTask("build-ui", ["concurrent:ui", "copy", "uncss"]);
  grunt.registerTask("build-images", ["responsive_images", "shell:game_images", "shell:system_images"]);
  grunt.registerTask("build-content", ["concurrent:content"]);
  grunt.registerTask("build-all-slow", ["precache", "build-ui", "build-content", "build-images"]);
  grunt.registerTask("build-fast", ["build-ui", "build-content"]);
};
