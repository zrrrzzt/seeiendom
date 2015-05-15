'use strict';

var querystring = require('querystring');
var getData = require('./lib/getData');
var buildFilterstring = require('./lib/buildFilterstring');
var apiUrl = 'http://eiendom.statkart.no/Search.ashx';

function getDataFromSeEiendom(options, callback) {
  if (!options) {
    return callback(new Error('Missing required param: options'), null);
  }
  if (!options.query) {
    return callback(new Error('Missing required param: options.query'), null);
  }
  var filterQuery = {
    sources: options.sources || ['sted', 'matreiendom'],
    key: options.key || 'httpwwwseeiendomno',
    groups: options.groups || ['guests']
  };
  var query = {
    'term': options.query,
    '_': new Date().getTime()
  };
  var url;
  var qs;

  buildFilterstring(filterQuery, function(error, filterString){
    if (error) {
      return callback(error, null);
    } else {
      query.filter = filterString;
      qs = querystring.stringify(query);
      url = apiUrl + '?' + qs;

      getData(url, function(err, data){
        if (err) {
          return callback(err, null);
        } else {
          return callback(null, data);
        }
      });

    }

  })
}

module.exports = getDataFromSeEiendom;