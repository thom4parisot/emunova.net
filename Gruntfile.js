"use strict";

var path = require("path");

module.exports = function (grunt) {
  var _str = grunt.util._.str;

  function renameSystemUri(dest, src){
    var basename = path.basename(src);

    return dest + (path.basename(path.dirname(src))) + "/" + basename;
  }

  function renameGameUri(dest, src){
    var game = path.basename(path.dirname(src));
    var clean = grunt.util._.compose(_str.slugify, _str.titleize);

    src = src.replace(game, clean(game));

    return dest + src;
  }

  grunt.initConfig({
    en: "node_modules/data.emunova.net",

    assemble: {
      options: {
        assets: "dist/assets",
        layoutdir: "src/layouts",
        engine: "handlebars",
        helpers: ["lib/handlebars/*.js"],
        partials: "src/partials/**/*.hbs",
        extension: ".html"
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

      game_entry: {
        expand: true,
        cwd: "<%= en %>",
        src: ["games/**/index.json"],
        rename: renameGameUri,
        dest: "dist/",
        options: {
          layout: "games/entry.hbs"
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

  grunt.registerTask("default", ["clean", "assemble", "copy"]);
  grunt.registerTask("deploy", ["default", "gh-pages"]);
};