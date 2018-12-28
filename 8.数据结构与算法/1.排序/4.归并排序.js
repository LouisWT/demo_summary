// http://book.51cto.com/art/201108/287077.htm
// 空间复杂度 o(n + logn) 数组空间以及递归的栈深度
// 平均/最好/最坏时间复杂度 o(nlogn)
// 是稳定的排序算法
function mergeSort(arr) {
  if (!arr) return;
  // 辅助数组
  const temp = new Array(arr.length);
  sort(arr, 0, arr.length - 1, temp);
}

function sort(arr, lo, hi, temp) {
  if (hi <= lo) { return; }
  const mid = Math.floor((hi + lo) / 2);
  // 划分
  sort(arr, lo, mid, temp);
  sort(arr, mid + 1, hi, temp);
  // 归并
  merge(arr, lo, mid, hi, temp);
}

function merge(arr, lo, mid, hi, temp) {
  let i = lo;
  let j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    temp[k] = arr[k];
  }

  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = temp[j++];
    else if (j > hi) arr[k] = temp[i++];
    else if (temp[j] < temp[i]) arr[k] = temp[j++];
    else arr[k] = temp[i++];
  }
}

const arr = [];

for(let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}


mergeSort(arr);

console.log(arr);