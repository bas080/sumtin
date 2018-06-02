## Tests

Something relies on tests to prove that randomly generated values are indeed
random enough but not so random that it's useless. The goal is to keep test
coverage at 100%.

You can run the tests yourself with `npm t`

### Coverage

```
require-run npm run coverage | grep '|$'
```
