// 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。

const object2 = { 0: 'a', 1: 'b', 2: 'c' };

// [["0", "a"], ["1", "b"], ["2", "c"]]
console.log(Object.entries(object2));

// example1 
// 使用 for...of 和 Object.entries生成的键值对数组来遍历对象
// for...of 是遍历数组的
for (let [key, value] of Object.entries(object2)) {
  console.log(key);
  console.log(value);
}

// example2
var obj = { foo: "bar", baz: 42 }; 
var map = new Map(Object.entries(obj));
// Map { foo: "bar", baz: 42 }
console.log(map); 