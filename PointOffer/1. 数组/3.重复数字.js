// p 39
// 1. 长度 n 的数组
// 2. 值都在 0 ~ n-1 之间
// 找出其中一个重复的元素

let arr = [2, 3, 1, 1, 2, 5, 3];

// 方法1:
// 使用一个辅助数组，对每个元素的出现频率计数
// 时间复杂度: o(n)
// 空间复杂度: o(n)
// 优点：可以找出每个重复元素
// 缺点：空间复杂度高
function findDupNumber(array) {
  const tempArr = new Array(array.length);
  // 初始化
  tempArr.fill(0);
  array.forEach((v) => {
    tempArr[v]++;
  });
  tempArr.forEach((v, index) => {
    if (v > 1) {
      console.log(index);
    }
  })
}

findDupNumber(arr);

// 方法2:
// 一个萝卜一个坑，如果有萝卜找不到坑，那就重复了
// 时间复杂度为 o(n): 一个循环搞定
// 空间复杂度 o(1): 不需要分配内存
// 优点：空间复杂度低
// 缺点：不保证能找到所有的重复元素
function newFindDupNumber(array) {
  // 参数验证
  if (!array) {
    return;
  }
  array.forEach((value, index, arr) => {
    if (value === index) {
      // 当前下标和当前值相等，不用挪
      return;
    } else if (arr[value] === value) {
      // 要挪的位置，下标和值相等，说明重复
      console.log(value);
      return;
    } else {
      // 把元素挪到和值相等的位置
      const temp = arr[value];
      arr[value] = value;
      arr[index] = temp;
    }
  });
}

newFindDupNumber(arr);