'use strict'

const tap = require('tap')
const validUrl = require('valid-url')

tap.ok(validUrl, 'valid-url loads OK')
