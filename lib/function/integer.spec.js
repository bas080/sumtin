'use strict'

const { test } = require('tap')
const integer = require('./integer')
const { times } = require('../helpers')

test('integer', t => {
  times(1000, () => {
    const int = integer(Math.random)

    t.equal(int, Math.floor(int))
  })

  t.end()
})
