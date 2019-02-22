function findDup(arr) {
  if (!arr) return null;
  for(let i = 0; i < arr.length; i++) {
    while (arr[i] != i) {
      let val = arr[i];
      let curr = arr[val];
      // 元素值等于下标
      if (curr === val) {
        return val;
      }
      swap(arr, i, val);
    }
  }
  return null;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [2, 3, 1, 1, 2, 5, 3];
console.log(findDup(arr))