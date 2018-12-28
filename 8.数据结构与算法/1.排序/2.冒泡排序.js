// 原理: 比较相邻元素，如果前一个比后一个大，那么交换他们
// 对每一对相邻元素重复此操作，这步做完最后一个元素是最大的元素
// 然后去除最后一个元素，对剩下的元素重复以上步骤

// 最坏时间复杂度  O(n^2)
// 最优时间复杂度	O(n)
// 平均时间复杂度	O(n^2)
// 最坏空间复杂度	总共 O(n)
// 需要辅助空间 O(1)
// 交换次数 0 ~ n(n-1)/2
// 比较次数 n(n-1)/2

function bubbleSort(arr) {
  if (!arr) return;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

bubbleSort(arr);
console.log(arr);