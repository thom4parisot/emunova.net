'use strict';

const fs = require('fs');
const glob = require('glob');
const sha256 = require('../sha256');
const chunk = require('lodash').chunk;
const camelCase = require('lodash').camelcase;
const request = require('hyperquest');

module.exports = (indexingOptions) => new Promise((resolve, reject) => {
  const { index, path, map } = indexingOptions;
  const { BATCH_LIMIT } = indexingOptions;

  glob(path, {}, (err, files) => {
    Promise.all(files.map(readJson(map)))
      .then(objects => [].concat(...objects))
      .then(objects => chunk(objects, BATCH_LIMIT))
      .then(batches => Promise.all(batches.map(objects => {
        return indexObjects(indexingOptions, objects);
      })))
      .then(resolve, reject);
  });
});

function indexObjects (indexingOptions, objects) {
  const { ALGOLIA_API_KEY, ALGOLIA_APP_ID, index } = indexingOptions;
  const opts = {
    headers: {
      'X-Algolia-API-Key': ALGOLIA_API_KEY,
      'X-Algolia-Application-Id': ALGOLIA_APP_ID,
      'Content-Type': 'application/json',
    }
  };

  return new Promise((resolve, reject) => {
    const payload = {
      'requests': objects.map(d => ({
        'action': 'updateObject',
        'body': Object.assign(d, {
          'objectID': sha256(d.url)
        })
      }))
    };

    request
      .post(`https://${ALGOLIA_APP_ID}.algolia.net/1/indexes/${index}/batch`, opts)
      .on('error', reject)
      .on('end', resolve)
      .end(JSON.stringify(payload));
  });
}

function readJson (mapFn) {
  return (filepath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, { encoding: 'utf8' }, (err, content) => {
        if (err) {
          return reject(err);
        }

        resolve(mapFn(JSON.parse(content), filepath));
      });
    });
  }
}
