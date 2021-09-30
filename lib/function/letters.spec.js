'use strict'

const { test } = require('tap')
const { times } = require('../helpers')
const letters = require('./letters')

test('letters', t => {
  times(512, i => {
    const value = letters(Math.random, () => i)

    t.equal(value.length, i)
    t.ok(typeof value === 'string')
  })

  t.end()
})
