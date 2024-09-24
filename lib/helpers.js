'use strict'

const clampTime = clamp(-8630000000000000, 8630000000000000)

function times (n, fn) {
  const result = Array.apply(null, new Array(n))

  result.forEach((_, index) => {
    result[index] = fn(index)
  })

  return result
}

function values (obj) {
  return Object.keys(obj).reduce((acc, key) => acc.concat(obj[key]), [])
}

function delta (a, b) {
  return Math.max(a, b) - Math.min(a, b)
}

function negate (v) {
  return v * -1
}

const now = new Date().getTime()

function nowWithOffset (milliseconds) {
  return new Date(clampTime(now + milliseconds))
}

function clamp (min, max) {
  return function clampValue (value) {
    if (value > max) { return max }

    if (value < min) { return min }

    return value
  }
}

function isFalsy (v) {
  return !v
}

module.exports = {
  nowWithOffset,
  isFalsy,
  values,
  negate,
  times,
  delta,
  clamp
}
