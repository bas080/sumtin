'use strict'

const { test } = require('tap')
const hexColor = require('./hex-color')

test('hexColor', t => {
  const value = hexColor(Math.random)

  t.match(value, /^#[0-9A-Fa-f]{6}/)

  t.end()
})
