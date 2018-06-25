#!/bin/bash

tmp="$(mktemp)"

./node_modules/.bin/tap -j25 ./lib/{**/,}*.spec.js > $tmp

cat $tmp
