'use strict'

module.exports = function sometimes(rand, doFn = v => v, value, ratio = 0.5)  {
    return (rand() > ratio)
      ? doFn(value)
      : value
}
