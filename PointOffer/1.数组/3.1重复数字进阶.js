// p 42
// 1. 长度 n+1 的数组
// 2. 值都在 1 ~ n 之间, 所以肯定有重复的
// 3. 不能改变原数组
// 找出其中一个重复的元素

const arr = [2, 3, 5, 4, 3, 2, 6, 7];

// 方法一
// 参考重复数字的方法一

// 方法二
// 用空间换时间

function countRange(array, start, end) {
  let count = 0;
  array.forEach((v) => {
    if (v >= start && v <= end) {
      count++;
    }
  });
  return count;
}

function findOneDupNumber(array) {
  // 参数验证
  if (!array) {
    return;
  }
  // 数的取值范围
  let start = 1;
  let end = array.length - 1;
  while (start <= end) {
    if(start === end) {
      console.log(start);
      break;
    }
    // 1. 分成两段 [start, middle] (middle, end]
    const middle = Math.floor((end - start)/2) + start;
    // 2. 计算前半段的数字在数组中出现的次数
    const count = countRange(array, start, middle);
    // 3. 发现出现次数大于数的个数，有重复
    if (count > middle - start + 1) {
      // 继续在这个范围内查找
      end = middle;
    } else {
      // 4. 在后一部分查找
      start = middle + 1;
    }
  }
}

findOneDupNumber(arr);


