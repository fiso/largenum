# Largenum

[![Build Status](https://travis-ci.com/fiso/largenum.svg?branch=master)](https://travis-ci.com/fiso/largenum)
[![Coverage Status](https://coveralls.io/repos/github/fiso/largenum/badge.svg?branch=master)](https://coveralls.io/github/fiso/largenum?branch=master)

Transforms large numbers into more easily digestible english.

## Usage

```js
const {largenum} = require('largenum');

console.log(largenum(1e100));
// '1 googol'

console.log(largenum(1e100, {exclusions: [1e100]}));
// '10 duotrigintillion'

console.log(largenum(64e63));
// '64 vigintillion'

console.log(largenum(14e63, {max: 1e12}));
// '14 thousand trillion trillion trillion trillion trillion'

console.log(largenum(22e6, {threshold: 1e9}));
// '22,000,000'
```

## Options

`largenum` accepts an options object as its second parameter. The available options are as follows.

Option        | Default     | Description
------------- |-------------| ---
max           | `undefined` | Sets the largest allowed name to be used. If you wanted to limit conversions to use trillions as the largest unit, you would pass `max: 1e12`. This would make 1e30 convert to "1 million trillion trillion" instead of "1 nonillion".
threshold     | `undefined` | Sets the lower limit for where conversions will be applied at all. Numbers below the threshold will convert to digits with thousands separators (i.e. 1e6 will convert to "1,000,000" if you have threshold set to at least `1e6 + 1`).
exclusions    | `[]`        | Exclude any names you dont want to be used. To exclude the googol, for example, you would include 1e100 in the list.
