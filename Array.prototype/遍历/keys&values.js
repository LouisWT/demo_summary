// values: 返回一个数组迭代器对象，该迭代器包含所有数组元素的值
// keys: 返回一个数组迭代器对象，该迭代器包含所有数组元素的键值

const arr = ['a', 'b', 'c']

let iterator1 = arr.keys();
for (let key of iterator1) {
  console.log(key);
}

// 当前 Node 版本没有 
// let iterator2 = arr.values();
// for (let value of iterator2) {
//   console.log(value);
// }