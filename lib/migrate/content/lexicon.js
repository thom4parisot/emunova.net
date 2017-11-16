'use strict';

const db = require('../database');
const write = require('../fs-write');
const europa = new (require('node-europa'));
const {stringify} = require('gray-matter');
const kebabcase = require('lodash.kebabcase');
const {decode} = require('he');
const slugify = (d) => kebabcase(decode(d).toLowerCase());

const data = (db) => {
  return db('en_lexique').select('*');
};


module.exports = () => {
  return data(db)
    .then(rows => {
      return rows
        .map(({definition, keyword, initiales, mot}) => {
          return {
            content: europa.convert(definition),
            data: {
              title: decode(mot),
              type: 'definition',
              abbr: initiales,
              group: [keyword].filter(k => k),
            },
          };
        });
    })
    .then(rows => {
      return rows.map(d => {
        return write(
          stringify(d),
          `definitions/${slugify(d.data.title)}.md`
        );
      })
    })
    .then(allP => Promise.all(allP));
};
