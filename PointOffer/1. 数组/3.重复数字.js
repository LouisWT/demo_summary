// p 39
// 1. 长度 n 的数组
// 2. 值都在 0 ~ n-1 之间
// 找出其中一个重复的元素

let arr = [2, 3, 1, 1, 2, 5, 3];
arr = [2,1,3,1,4];

// 方法1:
// 使用一个辅助数组，对每个元素的出现频率计数
// 时间复杂度: o(n)
// 空间复杂度: o(n)
// 优点：可以找出每个重复元素
// 缺点：空间复杂度高
// function findDupNumber(array) {
//   const tempArr = new Array(array.length);
//   // 初始化
//   tempArr.fill(0);
//   array.forEach((v) => {
//     tempArr[v]++;
//   });
//   tempArr.forEach((v, index) => {
//     if (v > 1) {
//       console.log(index);
//     }
//   })
// }

// findDupNumber(arr);

// 方法2:
// 一个萝卜一个坑，如果有萝卜找不到坑，那就重复了
// 时间复杂度为 o(n): 一个循环搞定
// 空间复杂度 o(1): 不需要分配内存
// 优点：空间复杂度低
// 缺点：不保证能找到所有的重复元素
function newFindDupNumber(arr, dup) {
  // 参数验证
  if (!arr) {
    return -1;
  }
  let flag = false;
  for(let i = 0; i < arr.length; i++) {
    // 获取当前值
    const value = arr[i];
    // 如果值和索引不同
    if (value !== i) {
      // 挪的目标位置有坑了，重复
      if (arr[value] === value) {
        dup[0] = value;
        flag = true;
        break;
      }
      // 否则就挪过去
      else {
        const temp = arr[value];
        arr[value] = arr[i];
        arr[i] = temp;
      }
    }
  }
    return flag;
}

console.log(newFindDupNumber(arr));
