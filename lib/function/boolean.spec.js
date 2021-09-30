'use strict'

const { test } = require('tap')
const boolean = require('./boolean')

test('boolean', t => {
  t.equal(boolean(() => 0), false)
  t.equal(boolean(() => 0.5), false)
  t.equal(boolean(() => 0.51), true)
  t.equal(boolean(() => 1), true)

  t.end()
})
