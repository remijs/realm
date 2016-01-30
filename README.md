# remi-realm

A remi extension that adds realm to the plugins

[![Dependency Status](https://david-dm.org/remijs/realm/status.svg?style=flat)](https://david-dm.org/remijs/realm)
[![Build Status](https://travis-ci.org/remijs/realm.svg?branch=master)](https://travis-ci.org/remijs/realm)
[![npm version](https://badge.fury.io/js/remi-realm.svg)](http://badge.fury.io/js/remi-realm)
[![Coverage Status](https://coveralls.io/repos/remijs/realm/badge.svg?branch=master&service=github)](https://coveralls.io/github/remijs/realm?branch=master)


## Installation

```
npm i remi-realm
```


## Usage

Registering the extension

```js
const remi = require('remi')
const remiRealm = require('remi-realm')

let app = {}
let registrator = remi(app)
registrator.hook(remiRealm())
```


## License

MIT
