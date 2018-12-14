// 返回一个给定对象自身所有 Symbol 属性的数组

let obj = {};
let a = Symbol('a');
let b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

// [ Symbol(a), Symbol(b) ]
console.log(Object.getOwnPropertySymbols(obj))