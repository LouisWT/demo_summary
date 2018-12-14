// 返回一个对象自身所有可枚举属性的值的数组
// 值的顺序与使用 for...in 循环的顺序相同

const obj = {a: 1, b: 2, c: 3};

obj.__proto__ = { d: 4 }

// [ 1, 2, 3 ]
console.log(Object.values(obj));

// 1 2 3 4
for(let i in obj) {
  console.log(obj[i]);
}