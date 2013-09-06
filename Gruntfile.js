"use strict";

function renameSystemUri(dest, src){
  return dest + src.replace(/^systems\//, "");
}

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