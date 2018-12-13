// 将数组排序，返回当前数组

const arr = [5, 4, 3, 2, 1];

// a b 表示数组中相邻的两个元素，a在前 b在后
const sortFunc = (a, b) => {
  // -1(小于0) 表示 a b 不需要换位置
  if(a < b) {
    return -1;
  }
  // 1(大于0) 表示 a b 需要换位置
  if (a > b) {
    return 1;
  }
  // 相对位置不变
  return 0;
}

// [ 1, 2, 3, 4, 5 ]
console.log(arr.sort(sortFunc));
// [ 1, 2, 3, 4, 5 ]
console.log(arr);