'use strict'

const rangedNumber = require('./ranged-number')

module.exports = function positiveNumber(rand) {
  return rangedNumber(rand, [1, Number.MAX_SAFE_INTEGER])
}
