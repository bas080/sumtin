'use strict'

const { nowWithOffset } = require('../helpers')
const negativeInteger = require('./negative-integer')

module.exports = function pastDate (rand) {
  return nowWithOffset(negativeInteger(rand))
}
