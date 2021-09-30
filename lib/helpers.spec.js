'use strict'

const { test } = require('tap')
const { isFalsy } = require('./helpers')

test('isFalsy', t => {
  t.equal(isFalsy(true), false)

  t.end()
})
