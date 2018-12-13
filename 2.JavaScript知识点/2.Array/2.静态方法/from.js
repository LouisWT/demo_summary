// Array.from() 从一个类数组对象或可迭代对象中创建一个数组实例
// 1. 参数形式
// Array.from(arrayLike, mapFunc, thisArg);

const str = 'foo';
const arr = Array.from(str, x => x.toUpperCase());
const arr1 = Array.from(str);

// FOO
console.log(arr);
// foo
console.log(arr1);

// 2.通过伪数组对象创建数组
const a = {
  length: 3,
  0: 1,
  '1': 2,
  'foo': 'bar'
};

// [1, 2, undefined]
console.log(Array.from(a))

// 3. 将 Map 或者 Set (可迭代对象) 转换为数组

let s = new Set(['foo', { a: 1 }]); 
// [ 'foo', { a: 1 } ]
console.log(Array.from(s)); 

let m = new Map([[1, 2], [2, 4], [4, 8]]);
// [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]
console.log(Array.from(m)); 
