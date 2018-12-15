// 这个对象的元素是类似 [value, value] 形式的数组，value 是集合对象中的每个元素，
// 迭代器对象元素的顺序即集合对象中元素插入的顺序。
// 由于集合对象不像 Map 对象那样拥有 key，
// 然而，为了与 Map 对象的 API 形式保持一致，故使得每一个 entry 的 key 和 value 都拥有相同的值，因而最终返回一个 [value, value] 形式的数组。

var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]

// foobar
// 1
// baz
for (let k of mySet.keys()) {
  console.log(k);
}

// foobar
// 1
// baz
for (let k of mySet.values()) {
  console.log(k);
}