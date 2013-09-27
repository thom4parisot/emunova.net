"use strict";

var grunt = require("grunt");

function expandEnvVariables(namespace, contextPath){
  var rules = expandEnvVariables.rules;
  var variables = getPathVariables(contextPath);

  return namespace.replace(new RegExp("{("+ Object.keys(rules).join("|") +")}", "g"), function(m, key){
    return variables[key];
  });
}

function getPathVariables(contextPath){
  var variables = {};
  var rules = expandEnvVariables.rules;

  Object.keys(rules).forEach(function(varName){
    rules[varName].some(function(matcher){
      var result = contextPath.match(matcher);

      if (result){
        variables[varName] = result[1];
        return true;
      }
    });
  });

  return variables;
}

expandEnvVariables.rules = {
  "system": [
    /systems\/([^\/\.$]+)/,
    /games\/([^\/$]+)/
  ],
  "game": [
    /games\/[^\/\.$]+\/([^\/\.$]+)\//
  ]
};

expandEnvVariables.getters = {
  "system": function(keys, cache){
    return cache.systems[keys.system];
  },
  "game": function(keys, cache){
    var filename = "cache/games/"+ keys.system +".json";

    return grunt.file.exists(filename) ? grunt.file.readJSON(filename)[keys.game] : {};
  }
}

/**
 *
 * @param {String} namespace
 * @example
 * {{import "systems/super-nes" as "system"}}
 * {{system.name}}
 */
function importJSONData(){
  var namespaces = [].slice.call(arguments);
  var context = namespaces.pop();
  var vars = getPathVariables(this.page.src);
  var self = this;

  namespaces.forEach(function(namespace){
    self[namespace] = expandEnvVariables.getters[namespace](vars, self);
  });


  if (context && context.fn){
    return context.fn(this).replace(/[\s\S]+(<!DOCTYPE)/m, "$1");
  }
}

module.exports = {
  import: importJSONData
};