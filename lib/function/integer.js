'use strict'

const number = require('./number')

module.exports = function integer(rand) {
  return Math.floor(number(rand))
}

