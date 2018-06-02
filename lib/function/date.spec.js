'use strict'

const {test} = require('tap')
const date = require('./date')

test('date', t => {
  t.equal(
    date(() => 0).getTime(),
    0
  )

  t.equal(
    date(() => 1).getTime(),
    -377199254740991
  )

  t.end()
})
