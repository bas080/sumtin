'use strict'

const { delta } = require('../helpers')

module.exports = function rangedNumber (rand, range = [-1, 1]) {
  const [min, max] = range

  if (min === max) { return min }

  const value = min + (rand() * delta(min, max))

  return (value === max)
    ? rangedNumber(() => (rand() + Math.PI) % 1, range)
    : value
}
