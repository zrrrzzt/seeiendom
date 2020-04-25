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
  const searchstring = '3807-60/38'
  const expectedData = '41515783'
  seeiendom(searchstring)
    .then((data) => {
      tap.equal(data[0].id.toString(), expectedData, 'Data ok')
      test.done()
    })
    .catch((error) => {
      throw error
    })
})
