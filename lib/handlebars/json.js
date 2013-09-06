"use strict";

function expandEnvVariables(namespace, contextPath){
  var rules = expandEnvVariables.rules;

  return namespace.replace(new RegExp("{("+ Object.keys(rules).join("|") +")}"), function(m, variable){
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
    /systems\/([^\/$]+(\/[^\/\.$]+)?)\//,
    /games\/([^\/$]+)/
  ]
};

function readJSON(filepath, prop){
  var data;

  if (!filepath.match(/.json$/)){
    filepath += "index.json";
  }

  data = require("../../" + filepath);

  return prop !== undefined ? (data[prop] || "") : data;
}

function readNamespaceJSON(namespace, prop){
  namespace = expandEnvVariables(namespace, this.page.src);

  return readJSON("node_modules/data.emunova.net/"+namespace+"/index.json", prop);
}

function readSystemJSON(name, prop){
  return readNamespaceJSON("systems/"+name, prop);
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
  system: readSystemJSON,
  import: importJSONData
};