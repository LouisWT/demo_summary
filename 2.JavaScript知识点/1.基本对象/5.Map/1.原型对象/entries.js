// 返回一个新的包含 [key, value] ?对的 Iterator ?对象
// 返回的迭代器的迭代顺序与 Map 对象的插入顺序相同

var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]

// 0 :  foo
// 1 ': ' 'bar'
// {} ': ' 'baz'
for (let [key, value] of myMap.entries()) {
  console.log(key, ': ', value)
}

// 0 :  foo
// 1 ': ' 'bar'
// {} ': ' 'baz'
for (let [key, value] of myMap) {
  console.log(key, ': ', value)
}