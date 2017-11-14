"use strict";

const Knex = require("knex");

module.exports = Knex({
  client: "mysql2",
  connection: process.env.MYSQL_CONNECTION
});
