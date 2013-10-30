'use strict';

module.exports = {
  alphabetical: function(a, b){
    return a > b ? 1 : (a < b ? -1 : 0);
  },
  antechronological: function(a, b){
    return (a.published || new Date().toISOString()) < (b.published || new Date().toISOString());
  },
  chronological: function(a, b){
    return (a.published || new Date().toISOString()) > (b.published || new Date().toISOString());
  },
  anterating: function(a, b){
    return (b.rating || 0) - (a.rating || 0);
  }
};