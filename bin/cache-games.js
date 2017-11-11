#!/usr/bin/env node

'use strict';

const { promisify: pify } = require('util');
const write = pify(require('fs').writeFile);
const { relative, basename, resolve, join } = require('path');
const yaml = require('js-yaml');
const gm = require('gray-matter');
const glob = pify(require('glob'));

const contentDir = resolve('./content');

glob('content/*')
  .then(systemsDir => systemsDir.map(d => basename(d)))
  .then(systems =>
    systems.map(system => {
      const MAP = {};

      return glob(`content/${system}/**/{ratings,reviews}/*.md`)
        .then(files => files.map(gm.read))
        .then(files =>
          files.map(({ data, path }) => ({
            data,
            path,
            game: basename(resolve(path, '../..')),
            entry: relative(contentDir, resolve(path, '../..')) + '/',
            system
          }))
        )
        .then(files =>
          files.forEach(d => {
            const entry = MAP[d.entry] || {
              rating: [],
              breakdown: {}
            };

            // game ID
            entry.id = d.game;

            // rating
            entry.rating.push(parseFloat(d.data.rating, 10));

            // breakdown
            const rating = Math.round(d.data.rating - 0.001);
            entry.breakdown[rating] = (entry.breakdown[rating] || 0) + 1;

            MAP[d.entry] = entry;
          })
        )
        .then(() => {
          Object.keys(MAP).forEach(key => {
            const d = MAP[key];

            d.rating = (d.rating.reduce((t, v) => t + v, 0) / d.rating.length
            ).toFixed(1);
          });
        })
        .then(() => {
          if (Object.keys(MAP).length) {
            return write(`data/games/${system}.yaml`, yaml.dump(MAP));
          }
        });
    })
  );
