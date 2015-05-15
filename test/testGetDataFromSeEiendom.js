'use strict';

var assert = require('assert');
var getDataFromSeEiendom = require('../index');

describe('getDataFromSeEiendom', function() {

  it('it requires an options object', function(done) {

    var options = false;

    getDataFromSeEiendom(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.query to exist', function(done) {

    var options = {
      query: false
    };

    getDataFromSeEiendom(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.query/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it returns expected data', function(done) {

    var options = {
      sources: ['sted', 'matreiendom'],
      key: 'httpwwwseeiendomno',
      groups: ['guests'],
      query: '0806-60/77'
    };

    getDataFromSeEiendom(options, function(err, data) {
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