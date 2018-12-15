const arr = [1, 2, 3, 4];

// 1. 数组转为 Set
const set = new Set(arr);
// Set { 1, 2, 3, 4 }
console.log(set);

// 2. set 转为数组
// [1, 2, 3, 4]
console.log(Array.from(set));