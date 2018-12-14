const tap = require('tap')
const getDataFromSeEiendom = require('../../index')

tap.test('it requires a searchstring', function (test) {
  const searchstring = false
  const expectedErrorMessage = 'Missing required param: searchstring'
  getDataFromSeEiendom(searchstring, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns expected data', function (test) {
  const searchstring = '0806-60/77'
  const expectedData = '41515792'
  getDataFromSeEiendom(searchstring, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data[0].id.toString(), expectedData, 'Data ok')
    test.done()
  })
})
