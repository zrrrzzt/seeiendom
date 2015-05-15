'use strict';

var assert = require('assert');
var getData = require('../lib/getData');

describe('getData', function() {

  it('it requires param url to exist', function(done) {

    var url = false;

    getData(url, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: url/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires url to be a valid url', function(done) {

    var url = 'pysjepreik';

    getData(url, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Param url is invalid/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it returns expected data', function(done) {

    var apiUrl = 'http://eiendom.statkart.no/Search.ashx?';
    var filter = 'filter=KILDE:sted,matreiendom,SITEURLKEY:httpwwwseeiendomno,LESEGRUPPER:guests';
    var term = '&term=0806-60/77';
    var time = '&_=' + new Date().getTime();
    var url = apiUrl + filter + term + time;

    getData(url, function(err, data) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(data.length, 3);
        assert.equal(data[0].ID, '41515792');
      }
      done();
    });
  });

});

return;