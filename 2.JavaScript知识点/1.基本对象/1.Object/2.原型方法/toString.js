// 每个对象都有一个 toString 方法
// 如果此方法在自定义对象中未被覆盖, toString() 返回 [object type], type 为对象类型


// 可以通过 Object.ptototype.toString 检测对象类型

const toString = Object.prototype.toString;

// [object Date]
// [object String]
// [object Math]
// [object Undefined]
// [object Null]
console.log(toString.call(new Date));
console.log(toString.call(new String));
console.log(toString.call(Math));
console.log(toString.call(undefined));
console.log(toString.call(null));