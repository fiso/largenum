if (!Array.prototype.flat) {
	Object.defineProperty(Array.prototype, 'flat', {
		configurable: true,
		value: function flat () {
			var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);

			return depth ? Array.prototype.reduce.call(this, function (acc, cur) {
				if (Array.isArray(cur)) {
					acc.push.apply(acc, flat.call(cur, depth - 1));
				} else {
					acc.push(cur);
				}

				return acc;
			}, []) : Array.prototype.slice.call(this);
		},
		writable: true
	});
}

const firstExponents = [
  {n: 1e3, name: 'thousand'},
  {n: 1e6, name: 'million'},
  {n: 1e9, name: 'billion'},
  {n: 1e12, name: 'trillion'},
  {n: 1e15, name: 'quadrillion'},
  {n: 1e18, name: 'quintillion'},
  {n: 1e21, name: 'sextillion'},
  {n: 1e24, name: 'septillion'},
  {n: 1e27, name: 'octillion'},
  {n: 1e30, name: 'nonillion'},
];

const prefixes = [
  '',
  'un',
  'duo',
  'tre',
  'quattuor',
  'quin',
  'sex',
  'septen',
  'octo',
  'novem',
];

const suffixes = [
  'decillion',
  'vigintillion',
  'trigintillion',
  'quadragintillion',
  'quinquagintillion',
  'sexagintillion',
  'septuagintillion',
  'octogintillion',
  'nonagintillion',
  'centillion',
];

const exponents = [
  {n: 1e100, name: 'googol'},
  ...firstExponents,
  ...((suffixes.map((s, i) => prefixes.map((p, j) => ({
    n: Number(`1e${firstExponents.length * 3 + (prefixes.length * i + j + 1) * 3}`),
    name: p + s,
  }))).flat())),
].filter(e => e.n < Infinity)
.sort((a, b) => {
  if (a.n > b.n) {
    return -1;
  } else if (b.n > a.n) {
    return 1;
  }

  return 0;
});

function largenum (n, {
    threshold,
    max,
    exclusions = [],
  } = {}) {
  const sign = n < 0 ? -1 : 1;
  if (sign < 0) {
    n = n * -1;
  }

  if (n < threshold) {
    return Number(n).toLocaleString('en-US');
  }

  let str = '';

  const filteredExponents = exponents
    .filter(e => !exclusions.some(exclusion => exclusion === e.n));

  for (const exponent of filteredExponents) {
    if (max && exponent.n > max) {
      continue;
    }

    while (BigInt(n) > BigInt(exponent.n) - 1n) {
      n = Math.round(n / exponent.n);
      str = ` ${exponent.name}${str}`;
    }
  }

  return `${sign < 0 ? 'negative ' : ''}${n} ${str.substr(1)}`;
}

module.exports = {
  largenum,
};
