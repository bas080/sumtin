'use strict'

const {test} = require('tap')
const pick = require('./pick')
const {times} = require('../helpers')

test('pick', t => {
  const items = [1,2,3,4,5]

  times(1000, () => t.ok(items.indexOf(pick(Math.random, items)) !== -1))

  t.equal(pick(() => 0, items), 1)
  t.equal(pick(() => 0.9, items), 5)
  t.equal(pick(() => 1, items), 1)

  t.end()
})

