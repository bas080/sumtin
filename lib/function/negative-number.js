'use strict'

const {negate} = require('../helpers')
const positiveNumber = require('./positive-number')

module.exports = function negativeNumber(rand) {
  return negate(positiveNumber(rand))
}

