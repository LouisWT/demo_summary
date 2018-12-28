// 原理：数组中任意间隔为 h 的元素是有序的

function shellSort(arr) {
  if (!arr) return;
  let h = 1;
  // 1 4 13 40 121...
  while (h < Math.floor(arr.length/3)) h = 3 * h + 1;
  while (h >= 1) {
    // 当 h 为 1 时，退化为插入排序
    for (let i = h; i < arr.length; i++) {
      for (let j = i; j >= h; j -= h) {
        if (arr[j] < arr[j - h]) {
          swap(arr, j - h, j);
        }
      }
    }
    h = Math.floor(h/3);
  }
}

function swap(arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

shellSort(arr);
console.log(arr);