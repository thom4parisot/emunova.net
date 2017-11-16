'use strict';

const db = require('../database');
const systems = require('../systems');
const write = require('../fs-write');
const europa = new (require('node-europa'));
const {stringify} = require('gray-matter');
const kebabcase = require('lodash.kebabcase');
const {decode} = require('he');
const slugify = (d) => kebabcase(decode(d).toLowerCase());

const data = (db) => {
  return db("en_dossiers AS d")
    .leftJoin("en_dossiers_supports AS ds", "ds.C_DOSSIER", "=", "d.C_DOSSIER")
    .leftJoin("en_supports AS s", "s.C_SUPPORT", "=", "ds.C_SUPPORT")
    .leftJoin("en_team AS t", "t.C_TEAM", "=", "d.C_TEAM")
    .select("t.pseudo AS user", "d.*", "d.date_ajout AS date", "d.date_maj AS lastmod",  db.raw("GROUP_CONCAT(s.nom) AS systems"))
    .where("d.is_online", 1)
    .groupBy("d.C_DOSSIER");
};


module.exports = () => {
  return data(db)
    .then(rows => {
      return rows
        .map(d => {
          return {
            content: `${decode(d.description)}\n<!--more-->\n`,
            data: {
              title: decode(d.titre),
              type: 'guide',
              user: d.user,
              systems: (d.systems || '').split(',').map(systems).filter(k => k),
              date: new Date(d.date * 1000).toISOString(),
              lastmod: new Date(d.lastmod * 1000).toISOString(),
              pages: (d.menu || '').split('\r\n').map(decode).filter(k => k),
              __id: d.C_DOSSIER,
            },
          };
        });
    })
    .then(rows => {
      return rows.map(d => {
        const id = d.data.__id;
        delete d.data.__id;

        return write(
          stringify(d),
          `guides/${id}.md`
        );
      })
    })
    .then(allP => Promise.all(allP));
};
