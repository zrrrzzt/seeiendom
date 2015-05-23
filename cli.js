#! /usr/bin/env node

'use strict';

var seeiendom = require('./index');
var query = process.argv[2];
var pkg = require('./package.json');
var options = {
  query: query
};

if (query === '-v' || query === '--version') {
  return console.log(pkg.version);
}

if (query === '-h' || query === '--help' || query === undefined) {
  console.log('seeiendom ' + pkg.version);
  console.log('Usage:');
  console.log('Search seeiendom.no. Pass in your query.');
  return console.log('$ seeiendom 0806-60/77');
}

seeiendom(options, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
