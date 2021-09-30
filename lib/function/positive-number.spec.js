'use strict'

const { times } = require('../helpers')
const { test } = require('tap')
const positiveNumber = require('./positive-number')

test('positiveNumber', t => {
  times(1000, () => t.ok(positiveNumber(Math.random) > 0))

  t.not(positiveNumber(() => 0), -0)

  t.end()
})
