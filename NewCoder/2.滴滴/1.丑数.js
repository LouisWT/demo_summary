const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const num = parseInt(line);
  getNUgly(num);
});

function getNUgly(n) {
  if (n <= 0) return;
  let ugly = [1];
  let ind2 = 0;
  let ind3 = 0;
  let ind5 = 0;
  let index = 0;
  while (index < n - 1) {
    ugly.push(Math.min(ugly[ind2] * 2, ugly[ind3] * 3, ugly[ind5] * 5));
    index++;
    while (ugly[ind2] * 2 <= ugly[index]) { ind2++ }
    while (ugly[ind3] * 3 <= ugly[index]) { ind3++ }
    while (ugly[ind5] * 5 <= ugly[index]) { ind5++ }
  }
  console.log(ugly[ugly.length - 1])
}