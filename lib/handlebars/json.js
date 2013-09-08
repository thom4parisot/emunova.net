"use strict";

var grunt = require("grunt");

function expandEnvVariables(namespace, contextPath){
  var rules = expandEnvVariables.rules;

  return namespace.replace(new RegExp("{("+ Object.keys(rules).join("|") +")}", "g"), function(m, variable){
    var replacement = "";

    rules[variable].some(function(matcher){
      var result = contextPath.match(matcher);

      if (result){
        replacement = result[1];
        return true;
      }
    });

    return replacement;
  });
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

function readJSON(filepath, prop){
  var data;

  if (!filepath.match(/.json$/)){
    filepath += "index.json";
  }

  data = grunt.file.readJSON(filepath);

  return prop !== undefined ? (data[prop] || "") : data;
}

function readNamespaceJSON(namespace, prop){
  var data, id;

  namespace = expandEnvVariables(namespace, this.page.src);
  data = readJSON("node_modules/data.emunova.net/"+namespace+"/index.json", prop);
  id = namespace.split('/').pop();

  //dirty workaround to fix with a real Objectified System Objects
  if (typeof data === "object"){
    data.id = id;
  }
  else if (prop === "id"){
    return id;
  }

  return data;
}

/**
 *
 * @param {String} namespace
 * @example
 * {{import "systems/super-nes"}}
 * {{super-nes.name}}
 *
 * {{import "systems/super-nes" as "system"}}
 * {{system.name}}
 */
function importJSONData(namespace, as, alias){
  alias = (alias === undefined) ? as : alias;

  this[alias] = readNamespaceJSON.call(this, namespace);
}

module.exports = {
  json: readJSON,
  import: importJSONData
};