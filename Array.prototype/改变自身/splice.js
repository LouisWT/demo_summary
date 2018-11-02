// 删除元素 添加元素 替换元素，返回被修改的内容
// arr.splice(start, deleteCount, item1, ..., itemN)

let arr = [1, 2, 3, 4, 5];

// 1. 删除元素

// [3, 4, 5]
console.log(arr.splice(2));
// [1, 2]
// 默认是删除，删除包括开始位置往后的所有元素
console.log(arr);

arr = [1, 2, 3, 4, 5];
// [3]
console.log(arr.splice(2, 1));
// [1, 2, 4, 5]
console.log(arr);

// 2. 替换元素

// [2]
console.log(arr.splice(1, 1, 6));
// [1, 6, 4, 5]
console.log(arr);

// [6]
console.log(arr.splice(1, 1, 7, 8));
// [1, 7, 8, 4, 5]
console.log(arr);

// 3. 插入元素
arr = [1, 2, 3, 4, 5]

// [6, 7]
console.log(arr.splice(2, 0, 6, 7));
// [1, 2, 6, 7, 3, 4, 5]
console.log(arr);