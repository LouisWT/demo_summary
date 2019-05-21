function Walk(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res[0] = [arr[0], 0, 0]; 
      continue;
    }
    res[i] = [];
    res[i][0] = Math.min(res[i-1][0], res[i-1][1]) + arr[i];
    res[i][1] = Math.min(res[i-1][0], res[i-1][2]);
    res[i][2] = res[i-1][0];
  }
  return Math.min(res[arr.length - 1][0], res[arr.length - 1][1], res[arr.length - 1][2]);
}

function walk(arr, k = 0) {
  if (!arr) return 0;
  if (k >= arr.length) return 0;
  // 如果当前层用走的
  let num1 = arr[k] + walk(arr, k + 1);
  // 如果跳一层
  let num2 = jump(arr, k + 1);
  // 如果跳两层
  let num3 = jump(arr, k + 2);
  return Math.min(num1, num2, num3);
}

function jump(arr, k) {
  if (!arr) return 0;
  if (k >= arr.length) return 0;
  return arr[k] + walk(arr, k + 1);
}

let num = [3, 5, 1, 8,4];
console.log(Walk(num));