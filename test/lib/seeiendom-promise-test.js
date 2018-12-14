const tap = require('tap')
const seeiendom = require('../../index')

tap.test('it requires an options object', function (test) {
  const searchstring = false
  const expectedErrorMessage = 'Missing required param: searchstring'
  seeiendom(searchstring)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('it returns expected data', function (test) {
  const searchstring = '0806-60/77'
  const expectedData = '41515792'
  seeiendom(searchstring)
    .then((data) => {
      tap.equal(data[0].id.toString(), expectedData, 'Data ok')
      test.done()
    })
    .catch((error) => {
      throw error
    })
})
