'use strict'
module.exports = () =>
  (next, target, plugin, cb) =>
    next(Object.assign(target, {
      realm: {
        plugin: plugin.name,
        pluginOptions: plugin.options,
      },
    }), plugin, cb)
