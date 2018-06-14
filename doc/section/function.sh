#!/bin/bash

find ./lib/function// -type f | grep -v 'spec.js' | sort -b | while read file; do
name="${file##*/}"
name="${name%.*}"

  echo """### \`$(cat $file | grep module.exports | sed 's/module.exports = function //g' | sed 's/ {//g')\`

[\`source\`](./lib/function/$name.js)
[\`tests\`](./lib/function//$name.spec.js)
[\`edit\`](./doc/function/$name.md)

require ./doc/function/$name.md
"""
done
