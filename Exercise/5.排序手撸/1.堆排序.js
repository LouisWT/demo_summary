// 堆是近似完全二叉树的结构
// 每个节点小于它的子节点
function heapSort(arr) {
  if (!arr) return null;
  let N = arr.length;
  for (let k = Math.floor(arr.length / 2); k >= 1; k--) {
    sink(arr, k, N);
  }
  while (N > 1) {
    swap(arr, 1, N--);
    sink(arr, 1, N);
  }
  return arr;
}

function sink(arr, k, N) {
  // 很关键
  while (2 * k <= N) {
    let left = 2 * k;
    let right = 2 * k + 1;
    let temp = left;
    if (right <= N && less(arr, left, right)) {
      temp = right;
    }
    if (!less(arr, k, temp)) {
      return;
    }
    swap(arr, k, temp);
    k = temp;
  }
}

function less(arr, i, j) {
  return arr[i - 1] < arr[j - 1];
}

function swap(arr, i, j) {
  let temp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = temp;
}

const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(heapSort(arr))
