// 给定一个N* N矩阵，0表示海，1表示山，海的高度是0，山的高度大于等于1，一个区域和上下左右的高度差不超过1
// 求山的最高高度
// 输入
// 4
// 0111
// 0011
// 1111
// 1111
// 输出 4
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
    arr[count - 1] = line.split('').map((v) => { 
      if (v === '1') return -1
      else return 0
    })
  }
  count++;
  if (count >= (N + 1)) {
    calc(arr);
  }
});

function calc(arr) {
  let flag = false;
  let curr = 0;
  while (!flag) {
    flag = true;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (arr[i][j] === -1) {
          let plus = false;
          if (i >= 1 && arr[i - 1][j] === curr) {
            plus = true;
          }
          if (j <= (N - 2) && arr[i][j + 1] === curr) {
            plus = true;
          }
          if (i <= (N - 2) && arr[i + 1][j] === curr) {
            plus = true;
          }
          if (j >= 1 && arr[i][j - 1] === curr) {
            plus = true;
          }
          if (!plus) {
            flag = flag && false;
          } else {
            arr[i][j] = curr + 1;
          }
        }
      }
    }
    curr++;
  }
  console.log(curr);
}