const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let lines = [];
rl.on('line', function (line) {
  // 读取多行
  lines.push(line);
  count++;
  // 2指的是读取的行数
  if (count === 2) {
    // 调用函数
    // do(lines)
    console.log(lines);
  }
});