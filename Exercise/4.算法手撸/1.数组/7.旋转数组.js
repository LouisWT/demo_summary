function rotate(arr, k) {
  if (!arr) return null;
  if (k == 0) return arr;
  // 如果数组长度小于旋转长度，那么模除一下
  if (arr.length <= k) k = k % arr.length;
  // 前 arr.length - k 个数字旋转
  reverse(arr, 0, arr.length - 1 - k);
  // 后 k 个数字旋转
  reverse(arr, arr.length - k, arr.length - 1);
  // 整体再旋转
  reverse(arr, 0, arr.length - 1);
  return arr;
}

function reverse(arr, lo, hi) {
  while (lo < hi) {
    let tmp = arr[lo];
    arr[lo] = arr[hi];
    arr[hi] = tmp;
    lo++;
    hi--;
  }
}

let arr = [1,2,3,4,5,6,7];
console.log(rotate(arr, 3));