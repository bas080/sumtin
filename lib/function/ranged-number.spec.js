'use strict'

const { test } = require('tap')
const rangedNumer = require('./ranged-number')

test('rangedNumer', t => {
  t.equal(
    rangedNumer(() => 1),
    rangedNumer(() => Math.PI % 1)
  )

  t.end()
})
