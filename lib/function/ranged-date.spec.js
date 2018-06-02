'use strict'

const {test} = require('tap')
const rangedDate = require('./ranged-date')

test('rangedDate', t => {
  const start = new Date('1980-1-1')
  const end = new Date('1990-1-1')

  const date = rangedDate(Math.random, [start, end])

  t.ok(date > start)
  t.ok(date < end)
  t.end()
})
