## API

All random generation functions take a random function as its first argument.

For convenience sake, sumtin exports a function as the default value. This
function will return an object that contains the random generation functions.
These functions have the random function bound as the first argument.

```js
require-run node ./doc/example/bind.js && cat ./doc/example/bind.js
```

The pick function will always return the first value because the "random"
function will always return 0. This will result in the item located at index
0 to be returned. You wouldn't do this normally.

We could also pass the `Math.random` function. You could pass in any function
that returns a number between and including 0 and 1. Maybe you want to
reproduce the same "random" values. You can instead pass in your favorite
psuedorandom function. Maybe the
[seed-random](https://www.npmjs.com/package/seed-random)'s function.

require-run ./doc/section/function.sh
