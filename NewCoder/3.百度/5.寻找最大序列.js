// 与之前的子序列问题类似，只是多了个字符串 t, 另外获取的不再是子序列了，而是整个字符串最大

const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let strs;
let strt;
let count = 0;
rl.on('line', (line) => {
    if (count == 0) {
        strs = line;
        count = 1;
    } else if (count == 1) {
        strt = line;
        findMax(strs, strt);
    }
})

function findMax(s, t) {
  if (!s || !t) return;
  let sArr = s.split('');
  let tArr = t.split('');
  tArr.sort((a, b) => {
    if (a >= b) {
      return -1;
    } else {
      return 1;
    }
  });
  let tmax = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (tmax >= tArr.length) break;
    if (sArr[i] < tArr[tmax]) {
      sArr[i] = tArr[tmax];
      tmax++;
    }
  }
  console.log(sArr.join(''));
}