'use strict'

const digit = require('./digit')
const {test} = require('tap')

test('digit', t => {
  t.ok(digit(Math.random) >= 0)
  t.ok(digit(Math.random) <= 9)

  t.end()
})
