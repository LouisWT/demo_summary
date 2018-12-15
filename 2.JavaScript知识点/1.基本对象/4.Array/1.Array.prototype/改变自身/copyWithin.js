// 浅复制数组的一部分到同一数组的另一位置，并返回它
// arr.copyWithin(targetIndex, start, end)
// 将数组的[start, end)，包含第start 个元素，不包含第end 元素的这几个元素，复制到数组中 targetIndex 开始的位置，会发生覆盖
const arr = [1, 2, 3, 4, 5];

console.log(arr.copyWithin(0, 3, 4));
console.log(arr);

console.log(arr.copyWithin(1, 3));
console.log(arr);

// [ 4, 2, 3, 4, 5 ]
// [ 4, 2, 3, 4, 5 ]
// [ 4, 4, 5, 4, 5 ]
// [ 4, 4, 5, 4, 5 ]