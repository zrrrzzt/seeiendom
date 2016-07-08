'use strict'

const http = require('http')
const validUrl = require('valid-url')
const iconv = require('iconv-lite')

module.exports = (url, callback) => {
  var chunks = []
  var totallength = 0

  if (!url) {
    return callback(new Error('Missing required param: url'), null)
  }

  if (url && !validUrl.isWebUri(url)) {
    return callback(new Error('Param url is invalid'), null)
  }

  http.get(url, (res) => {
    res.on('data', function (chunk) {
      chunks.push(chunk)
      totallength += chunk.length
    })

    res.on('end', () => {
      var results = new Buffer(totallength)
      var pos = 0
      for (var i = 0; i < chunks.length; i++) {
        chunks[i].copy(results, pos)
        pos += chunks[i].length
      }
      var converted = iconv.decode(results, 'ISO-8859-1')
      var matched = converted.toString('utf-8').match(/\[.*\]/) || ['']
      return callback(null, eval(matched[0]))  // eslint-disable-line no-eval
    })
  }).on('error', (error) => {
    return callback(error, null)
  })
}
