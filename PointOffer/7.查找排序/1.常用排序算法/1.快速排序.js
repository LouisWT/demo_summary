const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

// http://book.51cto.com/art/201108/287089.htm
// 最好空间消耗: o(logn) 栈深度
// 平均空间消耗为: o(logn) 栈深度
// 最坏空间消耗为: o(n) 栈深度
// 平均时间复杂度: o(nlogn)
// 最差时间复杂度: o(n^2)。序列本身就是正序或者逆序
// 快速排序是不稳定的排序方法

// 优化方向:
// 1. 每次都取第一个数作为比较值不一定分隔得好。可以采用三数取中，也就是说先在 第一个数，中间的数，最后一个数中取一个中间值，用这个数来进行分隔
function partition(arr, lo, hi) {
  let i = lo;
  let j = hi + 1;

  const value = arr[lo];

  while(true) {
    // 直到找完或者找到比它大的元素
    // 这块儿容易写成 if !!
    while (arr[++i] <= value) { if (i == hi) break; }
    // 直到找完或者找到比它小的元素
    while (arr[--j] >= value) { if (j == lo) break; }
    // 这里一定要是大于等于
    if (i >= j) break;
    swap(arr, i, j);
  }
  swap(arr, lo, j);
  return j;
}

function swap(arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function sort(arr, lo, hi) {
  // ** 将这里变成大于等于
  if (lo >= hi) {
    return;
  }
  const j = partition(arr, lo, hi);
  sort(arr, lo, j - 1);
  sort(arr, j + 1, hi);
}

function quickSort(arr) {
  if (!arr) {
    return;
  }
  sort(arr, 0, arr.length - 1);
}

quickSort(arr);
console.log(arr);