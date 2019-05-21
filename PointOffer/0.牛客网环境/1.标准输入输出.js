const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr;
let count = 0;
let N = 0;
rl.on('line', function (line) {
  if (count === 0) {
    arr = new Array(parseInt(line))
    N = parseInt(line)
  } else if (count >= 1 && count <= (N + 1)) {
    arr[count - 1] = line.split('').map((v) => { return parseInt(v) })
  }
  count++;
  if (count >= (N + 1)) {
    calc(arr);
  }
});

function calc(arr) {
  // 找出为 0 的点，给它周围的不为 0 的点置为 1
  let res = new Array(N);
  for (let i = 0; i < N; i++) {
    res[i] = new Array(N);
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 0) {
        res[i][j] = 0;
        if (i >= 1 && arr[i - 1][j] === 1) {
          res[i - 1][j] = 1;
        }
        if (j <= (N - 2) && arr[i][j + 1] === 1) {
          res[i][j + 1] = 1;
        }
        if (i <= (N - 2) && arr[i + 1][j] === 1) {
          res[i + 1][j] = 1;
        }
        if (j >= 1 && arr[i][j - 1] === 1) {
          res[i][j - 1] = 1;
        }
      }
    }
  }
  let flag = false;
  let curr = 1;
  while (!flag) {
    flag = true;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (res[i][j] === undefined) {
          let plus = false;
          if (i >= 1 && res[i - 1][j] === curr) {
            plus = true;
          }
          if (j <= (N - 2) && res[i][j + 1] === curr) {
            plus = true;
          }
          if (i <= (N - 2) && res[i + 1][j] === curr) {
            plus = true;
          }
          if (j >= 1 && res[i][j - 1] === curr) {
            plus = true;
          }
          if (!plus) {
            flag = flag && false;
          } else {
            res[i][j] = curr + 1;
          }
        }
      }
    }
    curr++;
  }
  let max = res[0][0];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (max < res[i][j]) {
        max = res[i][j];
      }
    }
  }
  console.log(max);
}