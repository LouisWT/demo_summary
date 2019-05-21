// 先用第一个元素，将数组分割为两个部分，一边比它小，一边比它大
// 然后对这两个部分再递归分割，直到最后有序
function quickSort(arr) {
  if (!arr) return null;
  sort(arr, 0, arr.length - 1)
  return arr;
}

function sort(arr, lo, hi) {
  if (lo >= hi) return;
  let j = partition(arr, lo, hi);
  sort(arr, lo, j - 1);
  sort(arr, j + 1, hi);
}

function partition(arr, lo, hi) {
  let val = arr[lo];
  let i = lo;
  let j = hi + 1;
  while(true) {
    while(arr[++i] <= val) { if (i >= hi) break; }
    while(arr[--j] >= val) { if (j <= lo) break; }
    if (i >= j) break;
    swap(arr, i, j)
  }
  swap(arr, lo, j);
  return j;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(quickSort(arr))