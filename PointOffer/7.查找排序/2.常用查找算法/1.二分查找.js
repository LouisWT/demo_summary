// 给定一个有序整数数组A以及它的大小 n，同时给定要查找的元素 val
// 返回它在数组中的位置，从 0 开始
// 若不存在该元素，返回 -1，若元素出现多次，返回第一次出现的位置

const arr = [1, 2, 3, 3, 3, 4, 5, 6];

function binarySearch(arr, val) {
  if (!arr) {
    return -1;
  }
  let lo = 0;
  let hi = arr.length - 1;
  // 不要总想着递归，循环也不错
  while(lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === val) {
      // 检查下是不是第一个元素
      while(arr[mid] === val) {
        mid--;
      }
      return mid + 1;
    } else if (arr[mid] > val) {
      hi = mid - 1;
    } else if (arr[mid] < val) {
      lo = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 6));
console.log(binarySearch([1], 1));