'use strict'

const querystring = require('querystring')
const getData = require('./lib/get-data')
const buildFilterstring = require('./lib/build-filterstring')
const apiUrl = 'http://eiendom.statkart.no/Search.ashx'

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
    const filterQuery = {
      sources: options.sources || ['sted', 'matreiendom'],
      key: options.key || 'httpwwwseeiendomno',
      groups: options.groups || ['guests']
    }
    let query = {
      'term': options.query,
      '_': new Date().getTime()
    }

    query.filter = buildFilterstring(filterQuery)
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
