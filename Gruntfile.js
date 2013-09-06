"use strict";

module.exports = function (grunt) {
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
        src: ["systems/**/*.{json,md}"],
        dest: "dist/",
        rename: function(dest, src){
          return dest + src.replace(/^systems\//, "");
        },
        options: {
          layout: "systems/index.hbs"
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
        rename: function(dest, src){
          return dest + src.replace(/^systems\//, "");
        },
        dest: "dist/"
      }
    },

    clean: {
      build: "dist/**/*"
    }
  });

  grunt.loadNpmTasks("assemble");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");

  grunt.registerTask("default", ["clean", "assemble", "copy"]);
};