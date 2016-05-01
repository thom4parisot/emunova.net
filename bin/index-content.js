#!/usr/bin/env node

'use strict';

const index = require('../lib/algolia');
const path = require('path');

const BATCH_LIMIT = process.env.BATCH_LIMIT || 500;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const INDEX_ENV = 'prod';
const systems = require('../cache/systems.json');

index({
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
  BATCH_LIMIT,
  index: `${INDEX_ENV}_games`,
  path: 'cache/games/*.json',
  map: (fileContent, filename) => {
    const systemId = path.basename(filename, '.json');

    return Object.keys(fileContent)
      .map(key => fileContent[key])
      .map(object => Object.assign(object, {
        system: {
          name: systems[systemId].name,
          url: systems[systemId].url,
        }
      }));
  }
}).catch(err => console.error(err));
