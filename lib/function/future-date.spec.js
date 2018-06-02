'use strict'

const {test} = require('tap')
const futureDate = require('./future-date')
const pastDate = require('./past-date')

test('futureDate', t => {
  t.ok(new Date() < futureDate(Math.random))
  t.ok(pastDate(Math.random) < futureDate(Math.random))
  t.end()
})
