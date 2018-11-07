const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

function partition(arr, lo, hi) {
  let i = lo;
  let j = hi + 1;

  const value = arr[lo];

  while(true) {
    // 直到找完或者找到比它大的元素
    while (arr[++i] < value) { if (i == hi) break; }
    // 直到找完或者找到比它小的元素
    while (arr[--j] > value) { if (j == lo) break; }
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
  // 将这里变成大于等于
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

