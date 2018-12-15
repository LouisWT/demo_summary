// 判断一个对象是不是数组对象

// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
// true
console.log(Array.isArray(Array.prototype)); 
console.log(Array.isArray([]));

// false
console.log(Array.isArray({ __proto__: Array.prototype })); 
console.log(Array.isArray({}))

// polyfill
Array.isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

// true
console.log(Array.isArray(Array.prototype)); 
console.log(Array.isArray([]));

// false
console.log(Array.isArray({ __proto__: Array.prototype })); 
console.log(Array.isArray({}))