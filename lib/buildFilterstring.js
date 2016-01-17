'use strict'

function buildFilterstring (options) {
  if (!options) {
    throw new Error('Missing required param: options')
  }
  if (!options.sources) {
    throw new Error('Missing required param: options.sources')
  }
  if (!Array.isArray(options.sources)) {
    throw new Error('Wrong input. Options.sources is not an array')
  }
  if (!options.key) {
    throw new Error('Missing required param: options.key')
  }
  if (!options.groups) {
    throw new Error('Missing required param: options.groups')
  }
  if (!Array.isArray(options.groups)) {
    throw new Error('Wrong input. Options.groups is not an array')
  }

  var KILDE = 'KILDE:' + options.sources.join(',')
  var SITEURLKEY = 'SITEURLKEY:' + options.key
  var LESEGRUPPER = 'LESEGRUPPER:' + options.groups.join(',')
  var filter = KILDE + ',' + SITEURLKEY + ',' + LESEGRUPPER

  return filter
}

module.exports = buildFilterstring
