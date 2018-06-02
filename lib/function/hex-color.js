'use strict'

const {times} = require('../helpers')
const hexadecimalDigit = require('./hexadecimal-digit')

module.exports = function hexColor(rand) {
  return `#${times(6, () => hexadecimalDigit(rand)).join('')}`
}

