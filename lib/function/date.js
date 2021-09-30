'use strict'

const integer = require('./integer')

module.exports = function date (rand) {
  return new Date(integer(rand) % 8630000000000000)
}
