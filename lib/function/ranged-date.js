'use strict'

const positiveInteger = require('./positive-integer')

module.exports = function rangedDate(rand, range = [new Date(-1), new Date(1)]) {
  const start = range[0].getTime()
  const end = range[1].getTime()
  const diff = end - start

  return new Date(start + (positiveInteger(rand) % diff))
}
