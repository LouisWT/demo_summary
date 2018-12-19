// p189

function sumArr(arr) {
  if (!arr) return 0;
  return sum(arr, arr.length - 1);
}

function sum(arr, n) {
  if (n == 0) return arr[0];
  return arr[n] + sum(arr, n - 1);
}

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10))
}

console.log(arr);

console.log(sumArr(arr));