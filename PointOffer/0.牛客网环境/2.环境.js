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
    // 调用函数
  }
});
