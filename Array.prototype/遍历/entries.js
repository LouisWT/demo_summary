// 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对

const arr = ['a', 'b', 'c']

const iterator = arr.entries();

for(let [key, value] of iterator) {
  console.log(key);
  console.log(value);
}

// 0
// a
// 1
// b
// 2
// c