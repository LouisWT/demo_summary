// 如果有 toString，调用
let a = {
  toString() { return 1; }
}
// 2
console.log(a + 1);

// valueOf 优先级高于 toString，注意这里返回的是字符串
a.valueOf = () => '2';
// '21'
console.log(a + 1);

// [Symbol.toPrimitive]的优先级最高 
a[Symbol.toPrimitive] = () => 3;
// 4
console.log(a + 1);

a = {};
// 没找到，在原型链上继续找这三个方法
// '[object Object]1'
console.log(a + 1);

let proto1 = {
  toString() { return '4' }
}
a.__proto__ = proto1;

// 在原型对象上找到 toString 方法，就调用
// '41'
console.log(a + 1);

// 6
proto1.valueOf = () => 5;
console.log(a + 1);

// 61
proto1[Symbol.toPrimitive] = () => '6';
console.log(a + 1);

let proto2 = {
  [Symbol.toPrimitive]() { return 7 }
}

proto1.__proto__ = proto2;
delete proto1[Symbol.toPrimitive]
// 8
console.log(a + 1);

delete proto2[Symbol.toPrimitive]
proto2.valueOf = () => 8;
// 5, 这里调用的是 proto1 的 valueOf;
console.log(a + 1);

delete proto1.valueOf
// 9, 这里调用的才是 proto2 的 valueOf;
console.log(a + 1)