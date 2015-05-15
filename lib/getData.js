'use strict';

var http = require('http');
var Iconv  = require('iconv').Iconv;
var validUrl = require('valid-url');
var iconv = new Iconv('ISO-8859-1', 'UTF-8');

function getData(url, callback) {
  var chunks = [];
  var totallength = 0;

  if (!url) {
    return callback(new Error('Missing required param: url'), null);
  }

  if (url && !validUrl.isWebUri(url)) {
    return callback(new Error('Param url is invalid'), null);
  }

  http.get(url, function(res) {

    res.on('data', function(chunk) {
      chunks.push(chunk);
      totallength += chunk.length;
    });

    res.on('end', function() {
      var results = new Buffer(totallength);
      var pos = 0;
      for (var i = 0; i < chunks.length; i++) {
        chunks[i].copy(results, pos);
        pos += chunks[i].length;
      }
      var converted = iconv.convert(results);
      return callback(null, JSON.parse(JSON.stringify(eval(converted.toString('utf-8')))));
    });

  }).on('error', function(error) {
    return callback(error, null);
  });

}

module.exports = getData;