const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

function mergeSort(arr) {
  if (!arr) return [];
  const temp = new Array(arr.length);
  sort(arr, 0, arr.length - 1, temp);
  return arr;
}

function sort(arr, lo, hi, temp) {
  if (lo >= hi) return;
  const mid = Math.floor((lo + hi) / 2);
  sort(arr, lo, mid, temp);
  sort(arr, mid + 1, hi, temp);
  merge(arr, lo, mid, hi, temp);
}

function merge(arr, lo, mid, hi, temp) {
  for(let k = lo; k <= hi; k++) {
    temp[k] = arr[k];
  }
  let i = lo;
  let j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) { arr[k] = temp[j++]; }
    else if (j > hi) { arr[k] = temp[i++]; }
    else if (temp[i] <= temp[j]) { arr[k] = temp[i++]; }
    else { arr[k] = temp[j++]; }
  }
}

console.log(mergeSort(arr));