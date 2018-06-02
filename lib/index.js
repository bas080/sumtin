'use strict'

const functions = {
  boolean: require('./function/boolean'),
  char: require('./function/char'),
  date: require('./function/date'),
  digit: require('./function/digit'),
  falsy: require('./function/falsy'),
  futureDate: require('./function/future-date'),
  hexadecimalDigit: require('./function/hexadecimal-digit'),
  hexColor: require('./function/hex-color'),
  integer: require('./function/integer'),
  letter: require('./function/letter'),
  letters: require('./function/letters'),
  negativeInteger: require('./function/negative-integer'),
  negativeNumber: require('./function/negative-number'),
  number: require('./function/number'),
  pastDate: require('./function/past-date'),
  pick: require('./function/pick'),
  positiveInteger: require('./function/positive-integer'),
  positiveNumber: require('./function/positive-number'),
  rangedDate: require('./function/ranged-date'),
  rangedInteger: require('./function/ranged-integer'),
  rangedNumber: require('./function/ranged-number'),
  sometimes: require('./function/sometimes'),
}

const aliases = {
  wholeNumber: functions.positiveInteger,
  countingNumber: functions.positiveInteger,
}

function something(rand) {
  const fn = functions[functions.pick(rand, Object.keys(functions))]

  return fn(rand)
}

function bind(random) {
  return Object.keys(functions)
    .reduce((bound, key) => {
      bound[key] = functions[key].bind(null, random)

      return bound
    }, {something: something.bind(null, random)})
}

module.exports = Object.assign(bind, {
  something,
  ...functions,
  ...aliases
})
