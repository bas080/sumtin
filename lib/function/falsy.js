'use strict'

const pick = require('./pick')

module.exports = function falsy (rand) {
  return pick(rand, [null, undefined, false, 0, '', NaN])
}
