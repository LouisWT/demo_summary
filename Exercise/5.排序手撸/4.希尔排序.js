// 从间隔大的有序，到最后有序
// 比如首先是相隔13个元素有序，然后是相隔4个元素有序，最后是相隔1个元素有序
function shellSort(arr) {
  if (!arr) return null;
  let h = 1;
  while (h < Math.floor((arr.length / 3))) { h = 3 * h + 1; }
  while (h >= 1) {
    for (let i = h; i < arr.length; i++) {
      for (let j = i; j >= h; j-=h) {
        if (arr[j - h] > arr[j]) {
          swap(arr, j - h, j);
        }
      }
    }
    h = Math.floor(h / 3);
  }
  return arr;
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