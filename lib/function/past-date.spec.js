'use strict'

const { test } = require('tap')
const pastDate = require('./past-date')
const futureDate = require('./future-date')

test('pastDate', t => {
  t.ok(new Date() > pastDate(Math.random))
  t.ok(futureDate(Math.random) > pastDate(Math.random))
  t.end()
})
