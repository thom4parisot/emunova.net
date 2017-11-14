# [emunova.net](https://emunova.net) [![Build Status](https://travis-ci.org/oncletom/emunova.net.svg?branch=master)](https://travis-ci.org/oncletom/emunova.net)

# Install

```bash
$ brew install hugo
$ git clone https://github.com/oncletom/emunova.net.git --branch master --single-branch
$ cd emunova.net
$ npm install
```

# Assembling

## Production

```bash
$ npm run generate-thumbs
$ npm run build
```

Files will be available in the `./public` folder.

## Development

```bash
$ npm start
```

# Migrating content

## Setup database connection

A valid connection to a dump of Emu Nova v2 database is required.

```bash
export MYSQL_CONNECTION='mysql://<user>:<password>@host/db'
```

## Run the migration script

```bash
$ node ./bin/migrate <content-type>
```

| Type | Command |
| --- | --- |
| `lexicon`   | `node ./bin/migrate lexicon`  |
| `guides`   | `node ./bin/migrate guides`  |

Website will be available at [localhost:1313](http://localhost:1313/).
