// p129
// 一个整数数组，实现一个函数，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分

function reOrderArray(arr) {
  if (!arr) return;
  var i = -1;
  var j = arr.length;
  while(i <= j) {
    while(arr[++i] % 2 == 1) { if (i == arr.length - 1) break; }
    while(arr[--j] % 2 == 0) { if (j == 0) break; }
    if (i >= j) break;
    swap(arr, i, j)
  }
  return arr;
}

function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

var arr = [1, 2, 3, 4, 5];

reOrderArray(arr);
console.log(arr);