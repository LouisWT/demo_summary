// 返回一个由对象自身可枚举属性组成的数组
// 数组中属性名的排列顺序和 for...in 循环遍历对象时返回的顺序一致

const obj = {a: 1, b: 2, c: 3};

obj.__proto__ = { d: 4 }

// [ 'a', 'b', 'c' ]
console.log(Object.keys(obj));

// a b c d
for(let i in obj) {
  console.log(i);
}