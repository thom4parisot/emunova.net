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
  return db("en_emulateurs AS e")
    .leftJoin("en_emulateurs_supports AS es", "es.C_EMU", "=", "e.C_EMU")
    .leftJoin("en_supports AS s", "s.C_SUPPORT", "=", "es.C_SUPPORT")
    .select("e.*", db.raw("GROUP_CONCAT(s.nom) as systems"))
    .groupBy("e.C_EMU");
};


module.exports = () => {
  return data(db)
    .then(rows => {
      return rows
        .map(d => {
          const features = [
            d.need_plugin ? 'plugins' : '',
            d.need_bios ? 'bios' : '',
          ];

          return {
            content: decode(d.description),
            data: {
              title: decode(d.nom),
              type: 'emulator',
              systems: (d.systems || '').split(',').map(systems).filter(k => k),
              os: d.os.toLocaleLowerCase().split(' '),
              website: d.www,
              features: features.filter(k => k),
              legacy_id: d.C_EMU,
            },
          };
        });
    })
    .then(rows => {
      return rows.map(d => {
        const filepath = `emulators/${slugify(d.data.title)}/_index.md`;

        return mkdir('content/' + dirname(filepath))
          .then(() => write(stringify(d), filepath));
      })
    })
    .then(allP => Promise.all(allP));
};
