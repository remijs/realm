# remi-realm

A remi extension that adds realm to the plugins

[![Dependency Status](https://david-dm.org/zkochan/remi-realm/status.svg?style=flat)](https://david-dm.org/zkochan/remi-realm)
[![Build Status](https://travis-ci.org/zkochan/remi-realm.svg?branch=master)](https://travis-ci.org/zkochan/remi-realm)
[![npm version](https://badge.fury.io/js/remi-realm.svg)](http://badge.fury.io/js/remi-realm)
[![Coverage Status](https://coveralls.io/repos/zkochan/remi-realm/badge.svg?branch=master&service=github)](https://coveralls.io/github/zkochan/remi-realm?branch=master)


## Installation

```
npm i remi-realm
```


## Usage

Registering the extension

```js
const Remi = require('remi')
const remiRealm = require('remi-realm')

let remi = new Remi({
  extensions: [{ exptension: remiRealm }],
})
```


## License

MIT
