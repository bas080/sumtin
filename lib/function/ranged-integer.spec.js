'use strict'

const rangedInteger = require('./ranged-integer')

const {test} = require('tap')

test('rangedInteger', t => {
  t.equal(rangedInteger(() => 1, [0, 10]), 1)
  t.equal(rangedInteger(() => 0.9, [0, 10]), 9)
  t.equal(rangedInteger(() => 0, [0, 10]), 0)
  t.end()
})
