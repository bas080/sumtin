'use strict'

const letter = require('./letter')
const {times} = require('../helpers')

module.exports = function letters(rand, length = () => 20) {
  return times(length(rand), () => letter(rand)).join('')
}
