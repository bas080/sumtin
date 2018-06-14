# Sumtin

Referentially tranparent random generation functions

- [`boolean(rand)`](#booleanrand)
- [`char(rand)`](#charrand)
- [`date(rand)`](#daterand)
- [`digit(rand)`](#digitrand)
- [`falsy(rand)`](#falsyrand)
- [`futureDate(rand)`](#futuredaterand)
- [`hexadecimalDigit(rand)`](#hexadecimaldigitrand)
- [`hexColor(rand)`](#hexcolorrand)
- [`integer(rand)`](#integerrand)
- [`letter(rand)`](#letterrand)
- [`letters(rand, length = () => 20)`](#lettersrand-length----20)
- [`negativeInteger(rand)`](#negativeintegerrand)
- [`negativeNumber(rand)`](#negativenumberrand)
- [`number(rand)`](#numberrand)
- [`pastDate(rand)`](#pastdaterand)
- [`pick(rand, items = [])`](#pickrand-items--)
- [`positiveInteger(rand)`](#positiveintegerrand)
- [`positiveNumber(rand)`](#positivenumberrand)
- [`rangedDate(rand, range = [new Date(-1), new Date(1)])`](#rangeddaterand-range--new-date-1-new-date1)
- [`rangedInteger(rand, range)`](#rangedintegerrand-range)
- [`rangedNumber(rand, range = [-1, 1])`](#rangednumberrand-range---1-1)
- [`sometimes(rand, doFn = v => v, value, ratio = 0.5) `](#sometimesrand-dofn--v--v-value-ratio--05-)

## Reasoning

Referential transparency is nice. What I was missing was a simple random
generation library that works predictably.

This is achieved by passing the random function as an argument. It leaves it up
to you to use Math.random or your favorite pseudo random function instead.

## API

All random generation functions take a random function as its first argument.

For convenience sake, sumtin exports a function as the default value. This
function will return an object that contains the random generation functions.
These functions have the random function bound as the first argument.

```js
const assert = require('assert')
const {pick} = require('sumtin')(() => 0)

assert.equal(pick([1,2,3]), 1)
```

The pick function will always return the first value because the "random"
function will always return 0. This will result in the item located at index
0 to be returned. You wouldn't do this normally.

We could also pass the `Math.random` function. You could pass in any function
that returns a number between and including 0 and 1. Maybe you want to
reproduce the same "random" values. You can instead pass in your favorite
psuedorandom function. Maybe the
[seed-random](https://www.npmjs.com/package/seed-random)'s function.

### `boolean(rand)`

[`source`](./lib/function/boolean.js)
[`tests`](./lib/function//boolean.spec.js)
[`edit`](./doc/function/boolean.md)

Returns true whenever the rand function returns a value lower than or equal to
0.5. Otherwise returns false

### `char(rand)`

[`source`](./lib/function/char.js)
[`tests`](./lib/function//char.spec.js)
[`edit`](./doc/function/char.md)

Generate a random `char`. It uses the Javascript `String.fromCodePoint()` to
achieve this.

### `date(rand)`

[`source`](./lib/function/date.js)
[`tests`](./lib/function//date.spec.js)
[`edit`](./doc/function/date.md)

Creates a date between the Javascript minimum and maximum allowed dates.

The earliest date being `-271821-04-20T00:00:00.000Z`

The latest date being `+275760-09-13T00:00:00.000Z`

### `digit(rand)`

[`source`](./lib/function/digit.js)
[`tests`](./lib/function//digit.spec.js)
[`edit`](./doc/function/digit.md)

A numeric digit which is a number between 0 and 9

### `falsy(rand)`

[`source`](./lib/function/falsy.js)
[`tests`](./lib/function//falsy.spec.js)
[`edit`](./doc/function/falsy.md)

This will return one of the following values:
`null`, `undefined`, `false`, `0`, `''` and `NaN`.

You can read more about javascript falsy values over at
[Mozilla's falsy documentation](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### `futureDate(rand)`

[`source`](./lib/function/future-date.js)
[`tests`](./lib/function//future-date.spec.js)
[`edit`](./doc/function/future-date.md)

A future date returns a date that has occurred after the now date. The now date
is created when the module is evaluated. As a result a future can become a date
from the past if the lifecycle of the application increases.


### `hexadecimalDigit(rand)`

[`source`](./lib/function/hexadecimal-digit.js)
[`tests`](./lib/function//hexadecimal-digit.spec.js)
[`edit`](./doc/function/hexadecimal-digit.md)

TBD

### `hexColor(rand)`

[`source`](./lib/function/hex-color.js)
[`tests`](./lib/function//hex-color.spec.js)
[`edit`](./doc/function/hex-color.md)

TBD

### `integer(rand)`

[`source`](./lib/function/integer.js)
[`tests`](./lib/function//integer.spec.js)
[`edit`](./doc/function/integer.md)

Return a whole number between and including the numbers `9007199254740991` and
`-9007199254740991`

### `letter(rand)`

[`source`](./lib/function/letter.js)
[`tests`](./lib/function//letter.spec.js)
[`edit`](./doc/function/letter.md)

TBD

### `letters(rand, length = () => 20)`

[`source`](./lib/function/letters.js)
[`tests`](./lib/function//letters.spec.js)
[`edit`](./doc/function/letters.md)

TBD

### `negativeInteger(rand)`

[`source`](./lib/function/negative-integer.js)
[`tests`](./lib/function//negative-integer.spec.js)
[`edit`](./doc/function/negative-integer.md)

Return a whole number between and including the numbers `-1` and `-9007199254740991`

### `negativeNumber(rand)`

[`source`](./lib/function/negative-number.js)
[`tests`](./lib/function//negative-number.spec.js)
[`edit`](./doc/function/negative-number.md)

TBD

### `number(rand)`

[`source`](./lib/function/number.js)
[`tests`](./lib/function//number.spec.js)
[`edit`](./doc/function/number.md)

TBD

### `pastDate(rand)`

[`source`](./lib/function/past-date.js)
[`tests`](./lib/function//past-date.spec.js)
[`edit`](./doc/function/past-date.md)

TBD

### `pick(rand, items = [])`

[`source`](./lib/function/pick.js)
[`tests`](./lib/function//pick.spec.js)
[`edit`](./doc/function/pick.md)

TBD

### `positiveInteger(rand)`

[`source`](./lib/function/positive-integer.js)
[`tests`](./lib/function//positive-integer.spec.js)
[`edit`](./doc/function/positive-integer.md)

Return a whole number between and including the numbers `1` and `9007199254740991`

### `positiveNumber(rand)`

[`source`](./lib/function/positive-number.js)
[`tests`](./lib/function//positive-number.spec.js)
[`edit`](./doc/function/positive-number.md)

Return a number between and including the numbers `1` and `9007199254740991`

### `rangedDate(rand, range = [new Date(-1), new Date(1)])`

[`source`](./lib/function/ranged-date.js)
[`tests`](./lib/function//ranged-date.spec.js)
[`edit`](./doc/function/ranged-date.md)

TBD

### `rangedInteger(rand, range)`

[`source`](./lib/function/ranged-integer.js)
[`tests`](./lib/function//ranged-integer.spec.js)
[`edit`](./doc/function/ranged-integer.md)

Returns a integer between the range. The max value is never returned. Under the
hood it will retry getting a value if the value equals the max value

### `rangedNumber(rand, range = [-1, 1])`

[`source`](./lib/function/ranged-number.js)
[`tests`](./lib/function//ranged-number.spec.js)
[`edit`](./doc/function/ranged-number.md)

TBD

### `sometimes(rand, doFn = v => v, value, ratio = 0.5) `

[`source`](./lib/function/sometimes.js)
[`tests`](./lib/function//sometimes.spec.js)
[`edit`](./doc/function/sometimes.md)

Performs a function whenever the random value is greater than the ratio
argument.

This is used both internally and could be used to apply functions "sometimes"


## Tests

Something relies on tests to prove that randomly generated values are indeed
random enough but not so random that it's useless. The goal is to keep test
coverage at 100%.

You can run the tests yourself with `npm t`

### Coverage

```
----------------------------|----------|----------|----------|----------|-------------------|
File                        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------------|----------|----------|----------|----------|-------------------|
All files                   |      100 |      100 |      100 |      100 |                   |
 lib                        |      100 |      100 |      100 |      100 |                   |
  helpers.js                |      100 |      100 |      100 |      100 |                   |
  helpers.spec.js           |      100 |      100 |      100 |      100 |                   |
  index.js                  |      100 |      100 |      100 |      100 |                   |
  index.spec.js             |      100 |      100 |      100 |      100 |                   |
 lib/function               |      100 |      100 |      100 |      100 |                   |
  boolean.js                |      100 |      100 |      100 |      100 |                   |
  boolean.spec.js           |      100 |      100 |      100 |      100 |                   |
  char.js                   |      100 |      100 |      100 |      100 |                   |
  char.spec.js              |      100 |      100 |      100 |      100 |                   |
  date.js                   |      100 |      100 |      100 |      100 |                   |
  date.spec.js              |      100 |      100 |      100 |      100 |                   |
  digit.js                  |      100 |      100 |      100 |      100 |                   |
  digit.spec.js             |      100 |      100 |      100 |      100 |                   |
  falsy.js                  |      100 |      100 |      100 |      100 |                   |
  falsy.spec.js             |      100 |      100 |      100 |      100 |                   |
  future-date.js            |      100 |      100 |      100 |      100 |                   |
  future-date.spec.js       |      100 |      100 |      100 |      100 |                   |
  hex-color.js              |      100 |      100 |      100 |      100 |                   |
  hex-color.spec.js         |      100 |      100 |      100 |      100 |                   |
  hexadecimal-digit.js      |      100 |      100 |      100 |      100 |                   |
  hexadecimal-digit.spec.js |      100 |      100 |      100 |      100 |                   |
  integer.js                |      100 |      100 |      100 |      100 |                   |
  integer.spec.js           |      100 |      100 |      100 |      100 |                   |
  letter.js                 |      100 |      100 |      100 |      100 |                   |
  letter.spec.js            |      100 |      100 |      100 |      100 |                   |
  letters.js                |      100 |      100 |      100 |      100 |                   |
  letters.spec.js           |      100 |      100 |      100 |      100 |                   |
  negative-integer.js       |      100 |      100 |      100 |      100 |                   |
  negative-integer.spec.js  |      100 |      100 |      100 |      100 |                   |
  negative-number.js        |      100 |      100 |      100 |      100 |                   |
  negative-number.spec.js   |      100 |      100 |      100 |      100 |                   |
  number.js                 |      100 |      100 |      100 |      100 |                   |
  number.spec.js            |      100 |      100 |      100 |      100 |                   |
  past-date.js              |      100 |      100 |      100 |      100 |                   |
  past-date.spec.js         |      100 |      100 |      100 |      100 |                   |
  pick.js                   |      100 |      100 |      100 |      100 |                   |
  pick.spec.js              |      100 |      100 |      100 |      100 |                   |
  positive-integer.js       |      100 |      100 |      100 |      100 |                   |
  positive-integer.spec.js  |      100 |      100 |      100 |      100 |                   |
  positive-number.js        |      100 |      100 |      100 |      100 |                   |
  positive-number.spec.js   |      100 |      100 |      100 |      100 |                   |
  ranged-date.js            |      100 |      100 |      100 |      100 |                   |
  ranged-date.spec.js       |      100 |      100 |      100 |      100 |                   |
  ranged-integer.js         |      100 |      100 |      100 |      100 |                   |
  ranged-integer.spec.js    |      100 |      100 |      100 |      100 |                   |
  ranged-number.js          |      100 |      100 |      100 |      100 |                   |
  ranged-number.spec.js     |      100 |      100 |      100 |      100 |                   |
  sometimes.js              |      100 |      100 |      100 |      100 |                   |
  sometimes.spec.js         |      100 |      100 |      100 |      100 |                   |
----------------------------|----------|----------|----------|----------|-------------------|
```

## Support

The following node versions are supported.

- 4
- 5
- 6
- 7
- 8
- 9
- 10

Most of these versions are supported thanks to babel transpile.
