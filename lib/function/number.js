'use strict'

const sometimes = require('./sometimes')
const { negate } = require('../helpers')

module.exports = function number (rand) {
  return sometimes(rand, negate, rand() * Number.MAX_SAFE_INTEGER)
}
