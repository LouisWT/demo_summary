// 删除某个键值对
var map1 = new Map();
map1.set('bar', 'foo');

// true
console.log(map1.delete('bar'));
// false
console.log(map1.has('bar'));