// 堆排序包含两个过程
// 1. 堆的构造
// 2. 下沉排序

// 下沉第 k 个元素
function sink(arr, k, N) {
  while (2 * k <= N) {
    let j = 2 * k;
    if (j < N && less(arr, j, j + 1)) j++;
    if (!less(arr, k, j)) break;
    exeh(arr, k, j);
    k = j;
  }
}

function less(arr, i, j) {
  return arr[i-1] < arr[j-1];
}

function exeh(arr, i, j) {
  const temp = arr[i-1];
  arr[i-1] = arr[j-1];
  arr[j-1] = temp;
}

function heapSort(arr) {
  let N = arr.length;
  // 堆的构造过程，通过这个过程，根节点的值是最大的值
  for (let k = Math.floor(N/2); k >= 1; k--) {
    sink(arr, k, N);
  }
  // 堆的下沉排序。将堆中的最大元素删除，然后放入堆缩小后数组中空出的位置
  while (N > 1) {
    exeh(arr, 1, N--);
    sink(arr, 1, N);
  }
  return arr;
}

const arr = [];

for(let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(arr);

console.log(heapSort(arr))