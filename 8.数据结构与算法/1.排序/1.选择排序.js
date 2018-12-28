// 时间复杂度 o(n^2)
// 交换操作次数在 0 ~ n-1之间
// 比较操作次数为 n(n-1) / 2

// 原理: 首先找到数组元素的最小元素，然后将它和数组的第一个交换位置，然后将剩下的元素中找到最小的元素，与第二个元素交换位置，如此直到排序完。即不断选择剩余元素中最小的元素
function selectSort(arr) {
  if (!arr) return;
  for(let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      swap(arr, i, min);
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

selectSort(arr);

console.log(arr);