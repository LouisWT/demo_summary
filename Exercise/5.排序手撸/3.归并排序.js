function mergeSort(arr) {
  if (!arr) return;
  let temp = [];
  merge(arr, 0, arr.length - 1, temp);
  return arr;
}

function merge(arr, lo, hi, temp) {
  if (lo >= hi) return;
  let mid = Math.floor((lo + hi) / 2);
  merge(arr, lo, mid, temp);
  merge(arr, mid+1, hi, temp);
  combine(arr, lo, mid, hi, temp)
}

function combine(arr, lo, mid, hi, temp) {
  for (let k = lo; k <= hi; k++) {
    temp[k] = arr[k];
  }
  let i = lo;
  let j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = temp[j++];
    else if (j > hi) arr[k] = temp[i++];
    else if (temp[i] < temp[j]) arr[k] = temp[i++];
    else arr[k] = temp[j++];
  }
}


const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(mergeSort(arr))