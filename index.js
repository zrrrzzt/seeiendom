'use strict'

const querystring = require('querystring')
const getData = require('./lib/get-data')
const buildFilterstring = require('./lib/buildFilterstring')
const apiUrl = 'http://eiendom.statkart.no/Search.ashx'

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      let error = new Error('Missing required param: options')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }
    if (!options.query) {
      let error = new Error('Missing required param: options.query')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
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
        if (callback) {
          return callback(error, null)
        }
        reject(error)
      } else {
        if (callback) {
          return callback(null, data)
        }
        resolve(data)
      }
    })
  })
}
