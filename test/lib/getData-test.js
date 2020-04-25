var tap = require('tap')
var getData = require('../../lib/get-data')

tap.test('it requires param url to exist', function (test) {
  var url = false
  var expectedErrorMessage = 'Missing required param: url'
  getData(url, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns expected data', function (test) {
  const url = 'https://seeiendom.kartverket.no/api/soekEtterEiendom?searchstring=3807-60/38'
  const expectedData = '41515783'

  getData(url, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data[0].id.toString(), expectedData, 'Data OK')
    test.done()
  })
})
