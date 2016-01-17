'use strict'

var tap = require('tap')
var getData = require('../lib/getData')

tap.test('it requires param url to exist', function (test) {
  var url = false
  var expectedErrorMessage = 'Missing required param: url'
  getData(url, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires url to be a valid url', function (test) {
  var url = 'pysjepreik'
  var expectedErrorMessage = 'Param url is invalid'
  getData(url, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns expected data', function (test) {
  var apiUrl = 'http://eiendom.statkart.no/Search.ashx?'
  var filter = 'filter=KILDE:sted,matreiendom,SITEURLKEY:httpwwwseeiendomno,LESEGRUPPER:guests'
  var term = '&term=0806-60/77'
  var time = '&_=' + new Date().getTime()
  var url = apiUrl + filter + term + time
  var expectedData = '41515792'

  getData(url, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data[0].ID.toString(), expectedData, 'Data OK')
    test.done()
  })
})
