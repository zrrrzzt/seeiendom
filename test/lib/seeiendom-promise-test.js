const tap = require('tap')
const seeiendom = require('../../index')

tap.test('it requires an options object', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required param: options'
  seeiendom(options)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('it requires options.query to exist', function (test) {
  const options = {
    query: false
  }
  const expectedErrorMessage = 'Missing required param: options.query'
  seeiendom(options)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('it returns expected data', function (test) {
  const options = {
    query: '0806-60/77'
  }
  const expectedData = '41515792'
  seeiendom(options)
    .then((data) => {
      tap.equal(data[0].id.toString(), expectedData, 'Data ok')
      test.done()
    })
    .catch((error) => {
      throw error
    })
})
