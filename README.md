# [emunova.net](https://emunova.net) [![Build Status](https://travis-ci.org/oncletom/data.emunova.net.svg?branch=master)](https://travis-ci.org/oncletom/data.emunova.net) [![Build Status](https://travis-ci.org/oncletom/emunova.net.svg?branch=master)](https://travis-ci.org/oncletom/emunova.net)

## Installing

[`data.emunova.net`](https://github.com/oncletom/data.emunova.net) must have been installed first.

```bash
git clone https://github.com/oncletom/emunova.net.git --branch master --single-branch
npm install
npm link data.emunova.net
```

## Assembling

### Production

```bash
npm run build
```

### Development

By default, it will build things for the 3DO system only.

```bash
NODE_ENV=dev npm run build
```

You can change that by exposing the `SYSTEM` env variable:

```bash
NODE_ENV=dev npm run build -- --system arcade
```

This will then assemble only the `arcade` system.
