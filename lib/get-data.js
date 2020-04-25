const http = require('https')

module.exports = (url, callback) => {
  const chunks = []

  if (!url) {
    return callback(new Error('Missing required param: url'), null)
  }

  http.get(url, (res) => {
    res.on('data', function (chunk) {
      chunks.push(chunk)
    })

    res.on('end', () => {
      return callback(null, JSON.parse(chunks.join('')))
    })
  }).on('error', (error) => {
    return callback(error, null)
  })
}
