#!/usr/bin/env node

'use strict';

const type = process.argv[2];

const run = require(`../lib/migrate/content/${type}`);

run().then(() => process.exit(0));
