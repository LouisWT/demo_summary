// 数组中是否包含某个指定值，包含 true, 不包含 false
// includes(target, fromIndex)

const arr = [1, 2, 3];

// true
console.log(arr.includes(2));
// false
console.log(arr.includes('2'));
// false
console.log(arr.includes(4));
// true
console.log(arr.includes(2, 1));
// false
console.log(arr.includes(2, 2));