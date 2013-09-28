"use strict";

function getManufacturers(next){
  var systems = this.systems;
  var manufacturers = Object.keys(systems).map(function(key){
    if (systems[key].manufacturer){
      return systems[key].manufacturer;
    }
  })
  .sort(function(a, b){ return a < b ? -1 : (a > b ? 1 : 0); })
  .filter(function(manufacturer, i, elements){ return elements.indexOf(manufacturer, i+1) === -1 ; });

  return manufacturers.reduce(function(a, b){
    return a + next.fn(b);
  }, "");
}

module.exports = {
  manufacturers: getManufacturers
};
