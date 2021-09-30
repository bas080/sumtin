'use strict'

const { test } = require('tap')
const char = require('./char')
const { times } = require('../helpers')

test('char', t => {
  times(1000, () => {
    const value = char(Math.random)

    t.type(value, 'string')
  })

  t.doesNotThrow(() => char(() => 1))
  t.doesNotThrow(() => char(() => 0))

  t.throws(() => char(() => 32), RangeError)
  t.equal(char(() => 1), '␿')

  t.end()
})
