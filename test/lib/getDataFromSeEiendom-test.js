'use strict'

var tap = require('tap')
var getDataFromSeEiendom = require('../../index')

tap.test('it requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required param: options'
  getDataFromSeEiendom(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.query to exist', function (test) {
  var options = {
    query: false
  }
  var expectedErrorMessage = 'Missing required param: options.query'
  getDataFromSeEiendom(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns expected data', function (test) {
  var options = {
    sources: ['sted', 'matreiendom'],
    key: 'httpwwwseeiendomno',
    groups: ['guests'],
    query: '0806-60/77'
  }
  var expectedData = '41515792'
  getDataFromSeEiendom(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data[0].ID.toString(), expectedData, 'Data ok')
    test.done()
  })
})
