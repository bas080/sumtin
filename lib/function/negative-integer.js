'use strict'

const {negate} = require('../helpers')
const positiveInteger = require('./positive-integer')

module.exports = function negativeInteger(rand) {
  return negate(positiveInteger(rand))
}
