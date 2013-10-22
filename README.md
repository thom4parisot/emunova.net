# [emunova.net](http://emunova.net)

## Installing

```bash
git clone https://github.com/oncletom/emunova.net.git
npm install
bower install
npm link data.emunova.net
```

## Assembling`

**Notice**: it relies on GNU `sed`, which is not loaded by default on OSX.
The underlying effect is it will simply not copy the system and games images.

### Production

```bash
grunt build
```

### Development

By default, it will build things for the 3DO system only.

```bash
NODE_ENV=dev grunt build
```

You can change that by exposing the `SYSTEM` env variable:

```bash
NODE_ENV=dev SYSTEM=arcade grunt build
```

This will then assemble only the `arcade` system.

## Deploy

A complete deploy takes around 6 minutes if you have existing data on your machine.
It will mostly depend of your bandwidth capacity.

```bash
grunt deploy
```

**Notice**: this will also launch the build task.

If you have already built everything on your machine, then use the following:

```bash
grunt deploy-fast
``