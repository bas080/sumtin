const assert = require('assert')
const { pick } = require('sumtin')(() => 0)

assert.equal(pick([1, 2, 3]), 1)
