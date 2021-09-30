'use strict'

const rangedNumber = require('./ranged-number')

module.exports = function rangedInteger (rand, range) {
  return Math.floor(rangedNumber(rand, range))
}
