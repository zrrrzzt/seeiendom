'use strict'

module.exports = (options) => {
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

  const KILDE = 'KILDE:' + options.sources.join(',')
  const SITEURLKEY = 'SITEURLKEY:' + options.key
  const LESEGRUPPER = 'LESEGRUPPER:' + options.groups.join(',')

  return `${KILDE},${SITEURLKEY},${LESEGRUPPER}`
}
