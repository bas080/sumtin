'use strict'

const {test} = require('tap')
const hexadecimalDigit = require('./hexadecimal-digit')

test('hexadecimalDigit', t => {
  const value = hexadecimalDigit(Math.random)

  t.match(value, /^[0-9A-Fa-f]/)

  t.end()
})

