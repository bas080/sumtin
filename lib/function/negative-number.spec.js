'use strict'

const {times} = require('../helpers')
const {test} = require('tap')
const negativeNumber = require('./negative-number')

test('negativeNumber', t => {
  times(1000, () => t.ok(negativeNumber(Math.random) < 0))

  t.notEqual(negativeNumber(() => 0), -0)

  t.end()
})
