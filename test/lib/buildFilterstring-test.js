'use strict'

var tap = require('tap')
var buildFilterstring = require('../../lib/build-filterstring')

tap.throws(
  function () {
    options = false
    buildFilterstring(options)
  },
  {message: 'Missing required param: options'},
  'it requires an options object'
)

tap.throws(
  function () {
    var options = {
      sources: false
    }
    buildFilterstring(options)
  },
  {message: 'Missing required param: options.sources'},
  'it requires options.sources to exist'
)

tap.throws(
  function () {
    var options = {
      sources: true
    }
    buildFilterstring(options)
  },
  {message: 'Wrong input. Options.sources is not an array'},
  'it requires options.sources to be an array'
)

tap.throws(
  function () {
    var options = {
      sources: [1, 2],
      key: false
    }
    buildFilterstring(options)
  },
  {message: 'Missing required param: options.key'},
  'it requires options.key to exist'
)

tap.throws(
  function () {
    var options = {
      sources: [1, 2],
      key: true,
      groups: false
    }
    buildFilterstring(options)
  },
  {message: 'Missing required param: options.groups'},
  'it requires options.groups to exist'
)

tap.throws(
  function () {
    var options = {
      sources: [1, 2],
      key: true,
      groups: true
    }
    buildFilterstring(options)
  },
  {message: 'Wrong input. Options.groups is not an array'},
  'it requires options.groups to be an array'
)

var expected = 'KILDE:sted,matreiendom,SITEURLKEY:httpwwwseeiendomno,LESEGRUPPER:guests'
var options = {
  sources: ['sted', 'matreiendom'],
  key: 'httpwwwseeiendomno',
  groups: ['guests']
}
var testdata = buildFilterstring(options)

tap.equal(testdata, expected, 'it returns expected data')
