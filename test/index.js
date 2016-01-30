'use strict'
const chai = require('chai')
const expect = chai.expect
const plugiator = require('plugiator')

const remi = require('remi')
const realm = require('..')

describe('realm', function() {
  it('should path realm property', function() {
    let app = {}

    let registrator = remi(app)
    registrator.hook(realm())

    return registrator.register([
      {
        register: plugiator.create('plugin1', (app, options, next) => {
          expect(app.realm.plugin).to.eq('plugin1')
          expect(app.realm.pluginOptions.foo).to.eq(1)
          next()
        }),
        options: { foo: 1 },
      },
    ])
  })
})
