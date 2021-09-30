#!/usr/bin/env node

const kebabCase = require('lodash.kebabcase')
const functions = require('../../lib/index')
const fs = require('fs')
const functionSignature = fn => fn.toString().split('\n')[0]
  .replace('function ', '')
  .replace('{', '')
  .trim()

const result = Object.keys(functions)
  .map(key => {
    const fn = functions[key]
    const name = fn.name
    const fileName = kebabCase(name)

    if (name !== key) { return '' } // currently do nothing with aliases

    return `
### \`${functionSignature(fn)}\`

[\`source\`](./lib/function/${fileName}.js)
[\`tests\`](./lib/function//${fileName}.spec.js)
[\`edit\`](./doc/function/${fileName}.md)

${fs.readFileSync(`./doc/function/${fileName}.md`)}`
  })
  .filter(Boolean)
  .join('')

console.log(result)
