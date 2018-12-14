const querystring = require('querystring')
const getData = require('./lib/get-data')
const apiUrl = 'https://seeiendom.kartverket.no/api/soekEtterEiendom'

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      let error = new Error('Missing required param: options')
      return callback ? callback(error, null) : reject(error)
    }
    if (!options.query) {
      let error = new Error('Missing required param: options.query')
      return callback ? callback(error, null) : reject(error)
    }

    let query = {
      'searchstring': options.query
    }

    const qs = querystring.stringify(query)
    const url = `${apiUrl}?${qs}`

    getData(url, (error, data) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      } else {
        return callback ? callback(null, data) : resolve(data)
      }
    })
  })
}
