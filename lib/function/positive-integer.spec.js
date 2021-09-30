'use strict'

const { test } = require('tap')
const positiveInteger = require('./positive-integer')

test('positiveInteger', t => {
  const value = positiveInteger(Math.random)

  t.ok(value > 0)
  t.equal(Math.floor(value), value)

  t.end()
})
