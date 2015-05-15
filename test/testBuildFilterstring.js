'use strict';

var assert = require('assert');
var buildFilterstring = require('../lib/buildFilterstring');

describe('buildFilterstring', function() {

  it('it requires an options object', function(done) {

    var options = false;

    buildFilterstring(options, function(err, data) {
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

  it('it requires options.sources to exist', function(done) {

    var options = {
      sources: false
    };

    buildFilterstring(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.sources/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.sources to be an array', function(done) {

    var options = {
      sources: true
    };

    buildFilterstring(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Wrong input. Options.sources is not an array/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.key to exist', function(done) {

    var options = {
      sources: [1,2],
      key: false
    };

    buildFilterstring(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.key/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.groups to exist', function(done) {

    var options = {
      sources: [1,2],
      key: true,
      groups: false
    };

    buildFilterstring(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.groups/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.groups to be an array', function(done) {

    var options = {
      sources: [1,2],
      key: true,
      groups: true
    };

    buildFilterstring(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Wrong input. Options.groups is not an array/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it returns expected data', function(done) {

    var expected = 'KILDE:sted,matreiendom,SITEURLKEY:httpwwwseeiendomno,LESEGRUPPER:guests';
    var options = {
      sources: ['sted', 'matreiendom'],
      key: 'httpwwwseeiendomno',
      groups: ['guests']
    };

    buildFilterstring(options, function(err, data) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(data, expected);
      }
      done();
    });
  });

});

return;