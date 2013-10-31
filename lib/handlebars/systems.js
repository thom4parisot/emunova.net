"use strict";

var sort = require('../sort.js');

function getManufacturers(next){
  var systems = require('../../cache/systems.json');
  var manufacturers = Object.keys(systems).map(function(key){
    if (systems[key].manufacturer){
      return systems[key].manufacturer;
    }
  })
  .sort(sort.alphabetical)
  .filter(function(manufacturer, i, elements){ return elements.indexOf(manufacturer, i+1) === -1 ; });

  return manufacturers.reduce(function(a, b){
    return a + next.fn(b);
  }, "");
}

function getSystems(next){
  var systems = require('../../cache/systems.json');

  return Object.keys(systems).sort(sort.alphabetical).reduce(function(a, b, i){
    systems[b].index = i;
    return a + next.fn(systems[b]);
  }, '');
}

module.exports = {
  manufacturers: getManufacturers,
  systems: getSystems
};
