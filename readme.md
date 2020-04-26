# @bemoje/arr-shuffle

Shuffle items in an array in-place. Runtime: O(n)

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-shuffle" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-shuffle" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-shuffle" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-shuffle.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-shuffle" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-shuffle.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-shuffle" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-shuffle" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-shuffle/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-shuffle" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-shuffle
npm install --save @bemoje/arr-shuffle
npm install --save-dev @bemoje/arr-shuffle
```

## Usage

```javascript
import arrShuffle from '@bemoje/arr-shuffle'

arrShuffle([1, 2, 3])
//=> [2, 1, 3] - or some other random order

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrShuffle

Shuffle items in an array in-place. Runtime: O(n)

##### Parameters

-   `arr` **[Array][3]** The array to shuffle.

##### Returns
**[Array][3]** The shuffled array

[1]: #arrshuffle

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array