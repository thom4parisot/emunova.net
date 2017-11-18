'use strict';

const db = require('../database');
const {promisify} = require('util');
const systems = require('../systems');
const write = require('../fs-write');
const {dirname} = require('path');
const europa = new (require('node-europa'));
const {stringify} = require('gray-matter');
const kebabcase = require('lodash.kebabcase');
const {decode} = require('he');
const mkdir = promisify(require('mkdirp'));
const slugify = (d) => kebabcase(decode(d).toLowerCase());

const data = (db) => {
  return db("en_tutoriaux AS t")
    .leftJoin("en_team AS p", "p.C_TEAM", "=", "t.C_TEAM")
    .leftJoin("en_emulateurs AS e", "e.C_EMU", "=", "t.C_EMU")
    .select("t.*", "e.nom", "t.date_ajout AS date", "t.date_maj AS lastmod", "p.pseudo as user");
};


module.exports = () => {
  return data(db)
    .then(rows => {
      return rows
        .map(d => {
          return {
            content: '',
            data: {
              type: 'guide',
              user: d.user,
              date: new Date(d.date * 1000).toISOString(),
              lastmod: new Date(d.lastmod * 1000).toISOString(),
              __id: slugify(d.nom)
            },
          };
        });
    })
    .then(rows => {
      return rows.map(d => {
        const id = d.data.__id;
        delete d.data.__id;

        const filepath = `emulators/${id}/configure.md`;

        return mkdir('content/' + dirname(filepath))
          .then(() => write(stringify(d), filepath));
      })
    })
    .then(allP => Promise.all(allP));
};
