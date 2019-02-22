var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

rl.on('line', function (line) {
  let num = parseInt(line);
  calc(num)
});

function calc(num) {
  if (num <= 0) return;
  let count = 0;
  while (num != 1) {
    count++;
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num + 1;
    }
  }
  console.log(count);
}