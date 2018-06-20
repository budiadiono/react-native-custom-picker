const path = require('path')
const blacklist = require('metro/src/blacklist')
const pak = require('../package.json')
const escape = require('escape-string-regexp')

const peerDependencies = Object.keys(pak.peerDependencies)

module.exports = {
  getProjectRoots() {
    return [__dirname, path.resolve(__dirname, '..')]
  },
  getProvidesModuleNodeModules() {
    return [...peerDependencies]
  },
  getBlacklistRE() {
    return blacklist([
      new RegExp(
        `^${escape(path.resolve(__dirname, '..', 'node_modules'))}\\/.*$`
      )
    ])
  }
}
