// p82
// 数组的旋转，把数组的最开始的若干个元素搬到数组的末尾，称为旋转
// 输入一个递增排序数组的旋转，输出旋转数组的最小元素

// 对一个相对有序的数组进行查找，可以考虑二分查找

function find(arr) {
  if (!arr) return;
  let index1 = 0;
  let index2 = arr.length - 1;
  let indexMid = index1;
  while(arr[index1] >= arr[index2] && arr.length > 1) {
    if (index2 - index1 == 1) {
      indexMid = index2;
      break;
    }
    indexMid = Math.floor((index1 + index2) / 2);
    if (arr[index1] <= arr[indexMid]) {
      index1 = indexMid;
    } else if (arr[indexMid] <= arr[index2]) {
      index2 = indexMid
    }
  }
  return arr[indexMid];
}

console.log(find([3, 4, 5, 1, 2]))