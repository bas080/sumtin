'use strict'

const {test} = require('tap')
const negativeInteger = require('./negative-integer')

test('negativeInteger', t => {
  const value = negativeInteger(Math.random)

  t.true(value < 0)
  t.equal(Math.floor(value), value)

  t.end()
})
