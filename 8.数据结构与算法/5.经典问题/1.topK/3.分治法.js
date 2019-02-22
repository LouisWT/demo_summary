function topK(arr, k) {
  if (!arr || k <= 0 || k > arr.length) return [];
  if (k == arr.length) return arr.sort();
  find(arr, 0, arr.length - 1, k);
  let res = arr.slice(0, k);
  return res.sort();
}

function find(arr, lo, hi, k) {
  if (lo >= hi) return;
  let j = partition(arr, lo, hi);
  if (j > k) {
    find(arr, lo, j - 1, k);
  } else if (j < k) {
    find(arr, j + 1, hi, k);
  } else {
    return;
  }
}

function partition(arr, lo, hi) {
  let val = arr[lo];
  let i = lo;
  let j = hi + 1;
  while (true) {
    while (arr[++i] >= val) { if (i == hi) break; }
    while (arr[--j] <= val) { if (j == lo) break; }
    if (i >= j) break;
    swap(arr, i, j);
  }
  swap(arr, lo, j);
  return j;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 如果要修改为 minK，只需要反转 line 29 30 的大小判断

/**
 * 测试代码
 */
const arr = [];
let arr1 = [];
for(let i = 0; i < 10; i++) {
  let temp = Math.floor(Math.random() * 100)
  arr.push(temp);
  arr1.push(temp);
}

function quickSort(arr, lo, hi) {
  if (lo >= hi) return;
  let j = partition(arr, lo, hi);
  quickSort(arr, lo, j - 1);
  quickSort(arr, j + 1, hi);
}

quickSort(arr, 0, arr.length - 1)
console.log(arr);
console.log(topK(arr1, 5))