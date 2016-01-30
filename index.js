'use strict'
module.exports = function() {
  return (next, target, plugin, cb) => {
    let realm = {
      plugin: plugin.name,
      pluginOptions: plugin.options,
    }

    next(Object.assign(target, {
      realm,
    }), plugin, cb)
  }
}
