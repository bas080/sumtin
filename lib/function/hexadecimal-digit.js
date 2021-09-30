'use strict'

const pick = require('./pick')

const hexadecimalDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

module.exports = function hexadecimalDigit (rand) {
  return pick(rand, hexadecimalDigits)
}
