'use strict'

const positiveInteger = require('./positive-integer')

module.exports = function digit (rand) {
  return positiveInteger(rand) % 9
}
