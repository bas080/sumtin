'use strict'

const { test } = require('tap')
const falsy = require('./falsy')
const { times, isFalsy } = require('../helpers')

test('falsy', t => {
  times(1000, () => {
    t.ok(isFalsy(falsy(Math.random)))
  })

  t.end()
})
