const {largenum, exponents, generatedExponents} = require('./index.js');

test('Convert 1e3 to 1 thousand', () => expect(largenum(1e3)).toBe('1 thousand'));
test('Convert 1e6 to 1 million', () => expect(largenum(1e6)).toBe('1 million'));
test('Convert 1e9 to 1 billion', () => expect(largenum(1e9)).toBe('1 billion'));
test('Convert 1e12 to 1 trillion', () => expect(largenum(1e12)).toBe('1 trillion'));
test('Convert 1e15 to 1 quadrillion', () => expect(largenum(1e15)).toBe('1 quadrillion'));
test('Convert 1e18 to 1 quintillion', () => expect(largenum(1e18)).toBe('1 quintillion'));
test('Convert 1e21 to 1 sextillion', () => expect(largenum(1e21)).toBe('1 sextillion'));
test('Convert 1e24 to 1 septillion', () => expect(largenum(1e24)).toBe('1 septillion'));
test('Convert 1e27 to 1 octillion', () => expect(largenum(1e27)).toBe('1 octillion'));
test('Convert 1e30 to 1 nonillion', () => expect(largenum(1e30)).toBe('1 nonillion'));
test('Convert 1e33 to 1 decillion', () => expect(largenum(1e33)).toBe('1 decillion'));
test('Convert 1e36 to 1 undecillion', () => expect(largenum(1e36)).toBe('1 undecillion'));
test('Convert 1e39 to 1 duodecillion', () => expect(largenum(1e39)).toBe('1 duodecillion'));
test('Convert 1e42 to 1 tredecillion', () => expect(largenum(1e42)).toBe('1 tredecillion'));
test('Convert 1e45 to 1 quattuordecillion', () => expect(largenum(1e45)).toBe('1 quattuordecillion'));
test('Convert 1e48 to 1 quindecillion', () => expect(largenum(1e48)).toBe('1 quindecillion'));
test('Convert 1e51 to 1 sexdecillion', () => expect(largenum(1e51)).toBe('1 sexdecillion'));
test('Convert 1e54 to 1 septendecillion', () => expect(largenum(1e54)).toBe('1 septendecillion'));
test('Convert 1e57 to 1 octodecillion', () => expect(largenum(1e57)).toBe('1 octodecillion'));
test('Convert 1e60 to 1 novemdecillion', () => expect(largenum(1e60)).toBe('1 novemdecillion'));
test('Convert 1e63 to 1 vigintillion', () => expect(largenum(1e63)).toBe('1 vigintillion'));
test('Convert 1e66 to 1 unvigintillion', () => expect(largenum(1e66)).toBe('1 unvigintillion'));
test('Convert 1e69 to 1 duovigintillion', () => expect(largenum(1e69)).toBe('1 duovigintillion'));
test('Convert 1e72 to 1 trevigintillion', () => expect(largenum(1e72)).toBe('1 trevigintillion'));
test('Convert 1e75 to 1 quattuorvigintillion', () => expect(largenum(1e75)).toBe('1 quattuorvigintillion'));
test('Convert 1e78 to 1 quinvigintillion', () => expect(largenum(1e78)).toBe('1 quinvigintillion'));
test('Convert 1e81 to 1 sexvigintillion', () => expect(largenum(1e81)).toBe('1 sexvigintillion'));
test('Convert 1e84 to 1 septenvigintillion', () => expect(largenum(1e84)).toBe('1 septenvigintillion'));
test('Convert 1e87 to 1 octovigintillion', () => expect(largenum(1e87)).toBe('1 octovigintillion'));
test('Convert 1e90 to 1 novemvigintillion', () => expect(largenum(1e90)).toBe('1 novemvigintillion'));
test('Convert 1e93 to 1 trigintillion', () => expect(largenum(1e93)).toBe('1 trigintillion'));
test('Convert 1e96 to 1 untrigintillion', () => expect(largenum(1e96)).toBe('1 untrigintillion'));
test('Convert 1e99 to 1 duotrigintillion', () => expect(largenum(1e99)).toBe('1 duotrigintillion'));
// test('Convert 1e100 to 1 googol', () => expect(largenum(1e100)).toBe('1 googol'));
test('Convert 1e102 to 1 tretrigintillion', () => expect(largenum(1e102)).toBe('1 tretrigintillion'));
test('Convert 1e105 to 1 quattuortrigintillion', () => expect(largenum(1e105)).toBe('1 quattuortrigintillion'));
// test('Convert 1e303 to 1 centillion', () => expect(largenum(1e303)).toBe('1 centillion'));

test('Convert 1e100 with max 1e12', () => expect(largenum(1e100, {max: 1e12})).toBe('10 thousand trillion trillion trillion trillion trillion trillion trillion trillion'));

test('Convert 1e100 with exclusions', () => expect(largenum(1e100, {exclusions: [1e100]})).toBe('10 duotrigintillion'));

test('Convert 1e8 with threshold', () => expect(largenum(1e8, {threshold: 1e9})).toBe('100,000,000'));
