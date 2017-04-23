'use strict'

const http = require('http')
const validUrl = require('valid-url')
const iconv = require('iconv-lite')

module.exports = (url, callback) => {
  let chunks = []
  let totallength = 0

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
      const results = Buffer.alloc(totallength)
      let pos = 0
      for (let i = 0; i < chunks.length; i++) {
        chunks[i].copy(results, pos)
        pos += chunks[i].length
      }
      const converted = iconv.decode(results, 'ISO-8859-1')
      const matched = converted.toString('utf-8').match(/\[.*]/) || ['']
      return callback(null, eval(matched[0]))  // eslint-disable-line no-eval
    })
  }).on('error', (error) => {
    return callback(error, null)
  })
}
