"use strict";

var fs = require("fs");
var path = require("path");

function fileExists(filepath, next){
  var where = path.dirname(this.page.src);

  where += "/" + filepath;

  if (fs.existsSync(where)){
    return next.fn(this);
  }
}

module.exports = {
  file_exists: fileExists
};