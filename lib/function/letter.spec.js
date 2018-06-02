'use strict'

const {test} = require('tap')
const letter = require('./letter')

test('letter', t => {
  const value = letter(Math.random)

  t.equal(value.length, 1)
  t.match(value, /^[a-z]$/)

  t.end()
})
