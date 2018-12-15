var kvArray = [["key1", "value1"], ["key2", "value2"]];

// 1. 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
var myMap = new Map(kvArray);
// value1
console.log(myMap.get("key1"));

// 2. 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
// [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]
console.log(Array.from(myMap));

// 3. 将 Map 转换为 数组然后进行合并

var first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

var second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
var merged = new Map([...first, ...second, [1, 'eins']]);

// eins
console.log(merged.get(1)); 
// dos
console.log(merged.get(2));
// three
console.log(merged.get(3));