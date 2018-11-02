// 用一个固定值来田中一个数组中从起始索引到终止索引内全部的元素，不包括终止索引
// arr.fill(value, start, end)

const arr = [1, 2, 3, 4, 5];

// [ 1, 0, 3, 4, 5 ]
console.log(arr.fill(0, 1, 2));
// [ 1, 0, 3, 4, 5 ]
console.log(arr);

const oarr = [1, 1, 1];
// [ {}, {}, {} ]
console.log(oarr.fill({}));
oarr[0].he = 'haha'

// [ { he: 'haha' }, { he: 'haha' }, { he: 'haha' } ]
// 因为数组每个值都是同一个引用
console.log(oarr);