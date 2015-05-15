'use strict';

function buildFilterstring(options, callback) {
  if (!options) {
    return callback(new Error('Missing required param: options'), null);
  }
  if (!options.sources) {
    return callback(new Error('Missing required param: options.sources'), null);
  }
  if (!Array.isArray(options.sources)) {
    return callback(new Error('Wrong input. Options.sources is not an array'), null);
  }
  if (!options.key) {
    return callback(new Error('Missing required param: options.key'), null);
  }
  if (!options.groups) {
    return callback(new Error('Missing required param: options.groups'), null);
  }
  if (!Array.isArray(options.groups)) {
    return callback(new Error('Wrong input. Options.groups is not an array'), null);
  }

  var KILDE = 'KILDE:' + options.sources.join(',');
  var SITEURLKEY = 'SITEURLKEY:' + options.key;
  var LESEGRUPPER = 'LESEGRUPPER:' + options.groups.join(',');
  var filter = KILDE + ',' + SITEURLKEY + ',' + LESEGRUPPER;

  return callback(null,filter);

}

module.exports = buildFilterstring;