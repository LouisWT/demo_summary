// 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
//  Array.of() 和 Array 构造函数之间的区别在于处理整数参数
// Array.of(7) 创建一个具有单个元素 7 的数组
// 而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位的数组，而不是由7个undefined组成的数组）

// [ 0 ]
console.log(Array.of(0));
// []
console.log(Array(0));
// [ 3 ]
console.log(Array.of(3));
// [ <3 empty items> ]
console.log(Array(3));
// [ 3, 2, 1]
console.log(Array.of(3, 2, 1));
// [3, 2, 1]
console.log(Array(3, 2, 1));