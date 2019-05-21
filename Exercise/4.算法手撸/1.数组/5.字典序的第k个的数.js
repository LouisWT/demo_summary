// 给定整数n和k，找出[1, n]中按字典序排序的第k小的整数
// 比如 n = 15 k = 3
// 1 10 11 12 13 14 15 2 3 4 5 6 7 8 9
// k = 11

let readline = require('readline');
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let [n, k] = [];
read.on('line', (line) => {
    [n, k] = line.split(' ').map((v) => { return parseInt(v) });
    findKth(n, k)
})

function findKth(n, k) {
  if (!n || !k) return;
  let curr = 1;
  k -= 1;
  while (k > 0) {
    let steps = calcSteps(n, curr, curr + 1);
    if (steps <= k) {
      // 进入兄弟节点
      curr += 1;
      k -= steps;
    } else {
      // 进入下一层
      curr *= 10;
      k -= 1;
    }
  }
  console.log(curr);
}

function calcSteps(n, n1, n2) {
  let steps = 0;
  while (n1 <= n) {
    // n在 n1 n2之间
    if (n < n2) steps += n - n1 + 1;
    else steps += n2 - n1;
    n1 *= 10;
    n2 *= 10; 
  }
  return steps;
}