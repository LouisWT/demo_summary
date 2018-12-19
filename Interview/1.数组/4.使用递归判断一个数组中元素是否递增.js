// 191

function isIncrease(arr) {
  if (!arr) return false;
  if (arr.length <= 1) return true;
  return increase(arr, arr.length - 2, arr.length - 1);
}

function increase(arr, i, j) {
  if (i < 0) return true;
  if (arr[i] <= arr[j]) {
    return increase(arr, i - 1, j - 1);
  } else {
    return false;
  }
}

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10))
}


console.log(isIncrease(arr));
console.log(isIncrease([1, 2, 3, 4, 5, 6]));
console.log(isIncrease([1]));