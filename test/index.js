'use strict'
const chai = require('chai')
const expect = chai.expect
const plugiator = require('plugiator')

const Remi = require('remi')
const realm = require('../')

describe('realm', function() {
  it('should path realm property', function() {
    let app = {}

    let remi = new Remi({
      extensions: [realm],
    })
    return remi.register(app, [
      {
        register: plugiator.create('plugin1', (app, options) => {
          expect(app.realm.plugin).to.eq('plugin1')
          expect(app.realm.pluginOptions.foo).to.eq(1)
        }),
        options: {foo: 1},
      },
    ])
  })
})
