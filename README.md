# remi-realm

A remi extension that adds realm to the plugins

[![Dependency Status](https://david-dm.org/remijs/remi-realm/status.svg?style=flat)](https://david-dm.org/remijs/remi-realm)
[![Build Status](https://travis-ci.org/remijs/remi-realm.svg?branch=master)](https://travis-ci.org/remijs/remi-realm)
[![npm version](https://badge.fury.io/js/remi-realm.svg)](http://badge.fury.io/js/remi-realm)
[![Coverage Status](https://coveralls.io/repos/remijs/remi-realm/badge.svg?branch=master&service=github)](https://coveralls.io/github/remijs/remi-realm?branch=master)


## Installation

```
npm i remi-realm
```


## Usage

Registering the extension

```js
const remi = require('remi')
const remiRealm = require('remi-realm')

const app = {}
const registrator = remi(app)
registrator.hook(remiRealm())
```


## License

MIT © [Zoltan Kochan](https://www.kochan.io)
