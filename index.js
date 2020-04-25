const querystring = require('querystring')
const getData = require('./lib/get-data')
const apiUrl = 'https://seeiendom.kartverket.no/api/soekEtterEiendom'

module.exports = (searchstring, callback) => {
  return new Promise((resolve, reject) => {
    if (!searchstring) {
      const error = new Error('Missing required param: searchstring')
      return callback ? callback(error, null) : reject(error)
    }

    const query = {
      searchstring: searchstring
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
