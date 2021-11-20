const tap = require('tap')
const getDataFromSeEiendom = require('../../index')

tap.test('it requires a searchstring', function (test) {
  const searchstring = false
  const expectedErrorMessage = 'Missing required param: searchstring'
  getDataFromSeEiendom(searchstring, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('it returns expected data', function (test) {
  const searchstring = '3807-60/38'
  const expectedData = '41515783'
  getDataFromSeEiendom(searchstring, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data[0].id.toString(), expectedData, 'Data ok')
    test.end()
  })
})
