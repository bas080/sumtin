'use strict'

const { times, delta, values } = require('./helpers')
const { test } = require('tap')
const { pick, number, digit, boolean, rangedInteger, letter, hexadecimalDigit, something } = require('./index')
const bind = require('./index')

test('distribution', t => {
  // check if equally distributes assertion helper is working
  t.throws(() => isEquallyDistributed(rand => pick(rand, [0, 0, 0, 1])))
  t.doesNotThrow(() => isEquallyDistributed(rand => pick(rand, [0, 0, 1, 1])))

  isEquallyDistributed(rand => rangedInteger(rand, [0, 3]))
  isEquallyDistributed(rand => number(rand) < 0)
  isEquallyDistributed(boolean)
  isEquallyDistributed(letter)
  isEquallyDistributed(digit)
  isEquallyDistributed(hexadecimalDigit)
  t.end()
})

test('bound', t => {
  times(10000, () => {
    const random = Math.random()
    const bound = bind(() => random)

    t.same(
      bound.something(),
      bound.something(),
      `${random} -> ${something(() => random)}`
    )
  })

  t.end()
})

test('pure', t => {
  times(10000, () => {
    const random = Math.random()

    t.same(
      something(() => random),
      something(() => random),
      `${random} -> ${something(() => random)}`
    )
  })

  t.end()
})

test('something', t => {
  times(10000, () => {
    t.doesNotThrow(() => something(Math.random))
  })

  t.end()
})

function isEquallyDistributed (genFn, n = 100000, similarity = 0.1) {
  const groups = {}

  times(n, () => {
    const group = genFn(Math.random)

    groups[group] = (groups[group] || 0) + 1
  })

  function compare (groups) {
    if (groups.length < 2) { return true }

    const [current, next, ...rest] = groups

    if (delta(current / next, 1) > similarity) { throw new Error(`${genFn.name} not equally distributed (${current} / ${next})`) }

    return compare([next, ...rest])
  }

  return compare(values(groups))
}
