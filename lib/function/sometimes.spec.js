'use strict'

const { test } = require('tap')
const sometimes = require('./sometimes')

test('sometimes', t => {
  const inc = v => v + 1

  t.equal(sometimes(() => 1, inc, 1), 2)
  t.equal(sometimes(() => 0, inc, 1), 1)

  t.end()
})
