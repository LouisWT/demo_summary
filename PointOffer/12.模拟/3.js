const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let N = null;
let M = null;
let X = [];
let Y = [];
rl.on('line', function (line) {
  if(count == 0) {
    [N, M] = line.split(' ');
    N = parseInt(N)
    M = parseInt(M)
    count++;
  } else {
    let [buy, sell] = line.split(' ');
    X.push(parseInt(buy))
    Y.push(parseInt(sell))
    count++;
  }
  if (count === (N + 1)) {
    bagMax();
  }
});

function bagMax() {
  // 为了和第 i 件物品对应
  X = [0, ...X];
  Y = [0, ...Y];
  let max = [];
  // N + 1 的数组，代表所有物品
  for(let i = 0; i <= N; i++) {
    // 容量为 M + 1 的数组，下标代表钱数
    max[i] = new Array(M + 1);
  }
  // N 为股票数量
  for (let i = 0; i <= N; i++) {
    // M 为剩余钱数
    for (let j = 0; j <= M; j++) {
      if (i == 0) {
        max[0][j] = 0;
        continue;
      }
      if (j == 0) {
        max[i][0] = 0;
        continue;
      }
      max[i][j] = max[i - 1][j];
      if (j >= X[i]) {
        let putValue = max[i - 1][j - X[i]] + Y[i] - X[i];
        let notPutValue = max[i - 1][j];
        max[i][j] = Math.max(putValue, notPutValue);
      }
    }
  }
  console.log(max[N][M]);
}