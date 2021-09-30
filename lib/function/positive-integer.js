'use strict'

const positiveNumber = require('./positive-number')

module.exports = function positiveInteger (rand) {
  return Math.floor(positiveNumber(rand))
}
