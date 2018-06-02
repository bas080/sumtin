'use strict'

const {nowWithOffset} = require('../helpers')
const positiveInteger = require('./positive-integer')

module.exports = function futureDate(rand) {
  return nowWithOffset(positiveInteger(rand))
}

