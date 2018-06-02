'use strict'

const assert = require('assert')
const rangedInteger = require('./ranged-integer')

module.exports = function pick(rand, items = []) {
  assert.ok(Array.isArray(items), `expected ${items} to be an array`)

  const index = rangedInteger(rand, [0, items.length])

  return items[index]
}
