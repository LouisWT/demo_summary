function topK(arr, k) {
  if (!arr || k <= 0 || k > arr.length) return [];
  if (k == arr.length) return arr.sort();
  let heap = new Array(k);
  for (let i = 0; i < k; i++) {
    heap[i] = arr[i];
  }
  buildHeap(heap);
  for (let i = k; i < arr.length; i++) {
    if (arr[i] > heap[0]) {
      heap[0] = arr[i];
      insert(heap, 1, heap.length);
    }
  }
  return heap.sort();
}

function buildHeap(arr) {
  let N = arr.length;
  for (let k = Math.floor(N/2); k >= 1; k--) {
    sink(arr, k, N);
  }
  while (N > 1) {
    // 堆顶元素是最大的，将它放到最后
    exch(arr, 1, N);
    N--;
    // 下沉，这样新的堆顶是剩余元素的最大值
    sink(arr, 1, N);
  }
}

function sink(arr, k, N) {
  while (2 * k <= N) {
    let left = 2 * k;
    let right = left + 1;
    let temp = left;
    if (right <= N && less(arr, left, right)) temp = right;
    if (!less(arr, k, temp)) break;
    exch(arr, k, temp);
    k = temp;
  }
}

function less(arr, i, j) {
  return arr[i - 1] < arr[j - 1];
}

function exch(arr, i, j) {
  let temp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = temp;
}

// 注意: 堆插入元素时，是和下沉排序相反的过程
function insert(arr, k, N) {
  while (2 * k <= N) {
    let left = 2 * k;
    let right = 2 * k + 1;
    let temp = left;
    // 找出左右节点的小值
    if (right <= N && !less(arr, left, right)) temp = right;
    // 如果父节点小于子节点，break
    if (less(arr, k, temp)) break;
    exch(arr, k, temp);
    k = temp;
  }
}

// 如果要修改为 minK，只需要反转 line 9 37 38 61 63 的大小判断

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

buildHeap(arr)
console.log(arr);
console.log(topK(arr1, 5))