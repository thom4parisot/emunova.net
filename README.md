# [emunova.net](https://emunova.net) [![Build Status](https://travis-ci.org/oncletom/emunova.net.svg?branch=master)](https://travis-ci.org/oncletom/emunova.net)

## Installing

```bash
$ git clone https://github.com/oncletom/emunova.net.git --branch master --single-branch
$ cd emunova.net
$ npm install
```

## Assembling

### Production

```bash
$ hugo convert
$ npm run build
```

Files will be available in the `./public` folder.

### Development

```bash
$ hugo serve
$ npm run watch
```

Website will be available at [localhost:1313](http://localhost:1313/).
