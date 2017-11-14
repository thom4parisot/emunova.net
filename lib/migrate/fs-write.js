'use strict';

const {promisify: pify} = require('util');
const writeFile = pify(require('fs').writeFile);
const {join} = require('path');

const BASE_DIR = `${__dirname}/../../content`;

module.exports = (content, path) => {
  return writeFile(join(BASE_DIR, path), content);
}
