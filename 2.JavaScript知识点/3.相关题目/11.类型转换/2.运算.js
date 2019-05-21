// 加法运算，一方是字符串，即使是空字符串，会把另一方转为字符串
// '11'
console.log(1 + '1')
// 'true1'
console.log(true + '1')
// 'null1'
console.log(null + '1')
// 'undefined1'
console.log(undefined + '1')
// 会报错，symbol不能转换为字符串
// console.log(Symbol.for('a') + '1')

// 否则，会将两边试图转为数字
// 1
console.log(true + false)
// 0
console.log(null + null)
// NaN，undefined转为数字就是 NaN
console.log(undefined + undefined)
// NaN
console.log(undefined + 1)
// 4
console.log(2 * '2')
// 会报错，symbol不能转换为数字
// console.log(Symbol.for('a') + Symbol.for('b'))


// 特殊情况，在变量前面加 +(类似正号的语义)，会试图将它转为数字
// 'aNaN'
console.log('a' + +'b');

// 对于对象，加号运算会触发它们转基本类型的操作
// '1,21,2'，数组的 valueOf返回的是数组对象，所以调用的是 toString 来得到字符串
console.log([1, 2] + [1, 2])
// '[object Object][object Object]'
console.log({} + {})
// '[object Object]1'
console.log({a: 1} + 1)

// 其他运算就不会触发，引用类型转基本类型的操作，
// 会试图将它们转为数字，所以基本上都是 NaN
// NaN
console.log([] - [])