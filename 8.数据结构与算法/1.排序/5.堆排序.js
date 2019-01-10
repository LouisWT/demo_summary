// 堆排序包含两个过程
// 1. 堆的构造
// 2. 下沉排序

// 为了语义更好，编码时使用的索引是 1 ~ N(arr.length)
// 所以在实际操作的 less 函数和 exeh 函数中索引都减去 1 来映射实际的数组
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

// 下沉第 k 个元素
function sink(arr, k, N) {
  while (2 * k <= N) {
    // 叶子节点索引
    let left = 2 * k;
    let right = 2 * k + 1;
    let temp = left;
    // 比较两个叶子节点，j 是比较大的叶子节点
    if (right <= N && less(arr, left, right)) temp = right;
    // 如果叶子节点小于父节点就 break
    if (!less(arr, k, temp)) break;
    // 否则将比较大的叶子节点与父节点交换
    exeh(arr, k, temp);
    // 继续下沉
    k = temp;
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

const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(heapSort(arr))