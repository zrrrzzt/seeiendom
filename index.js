'use strict'

const querystring = require('querystring')
const getData = require('./lib/get-data')
const buildFilterstring = require('./lib/buildFilterstring')
const apiUrl = 'http://eiendom.statkart.no/Search.ashx'

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required param: options'), null)
  }
  if (!options.query) {
    return callback(new Error('Missing required param: options.query'), null)
  }
  const filterQuery = {
    sources: options.sources || ['sted', 'matreiendom'],
    key: options.key || 'httpwwwseeiendomno',
    groups: options.groups || ['guests']
  }
  var query = {
    'term': options.query,
    '_': new Date().getTime()
  }

  query.filter = buildFilterstring(filterQuery)
  const qs = querystring.stringify(query)
  const url = `${apiUrl}?${qs}`

  getData(url, (err, data) => {
    if (err) {
      return callback(err, null)
    } else {
      return callback(null, data)
    }
  })
}
