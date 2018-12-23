// 时间复杂度 o(n^2)
// 交换操作次数在 0 ~ n-1之间
// 比较操作次数为 n(n-1) / 2

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