'use strict'

const rangedInteger = require('./ranged-integer')

module.exports = function char(rand) {
  return String.fromCodePoint(rangedInteger(rand, [0, 65536]))
}
