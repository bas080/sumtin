'use strict'

const sometimes = require('./sometimes')

module.exports = function boolean (rand) {
  return sometimes(rand, () => true, false)
}
