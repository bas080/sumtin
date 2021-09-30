'use strict'

const { test } = require('tap')
const number = require('./number')
const { times } = require('../helpers')

test('number', t => {
  // negates for values gt 0.5
  times(1000, () => {
    const rand = Math.random()

    if (rand > 0.5) { t.ok(number(() => rand) < 0) } else { t.ok(number(() => rand) > 0) }
  })

  t.end()
})
