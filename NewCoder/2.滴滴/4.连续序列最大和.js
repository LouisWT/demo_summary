const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr;

rl.on('line', (line) => {
  arr = line.split(' ');
  console.log(findSub(arr));
})

function findSub(arr) {
  if (!arr || arr.length == 0) return;
  if (arr.length === 1) {
    return arr[0];
  }
  let maxArr = new Array(arr.length);
  // 记住只要是操作这种数组，一定要先 parseInt
  let max = parseInt(arr[0]);
  maxArr[0] = max;
  for (let i = 1; i < arr.length; i++) {
    // 记住只要是操作这种数组，一定要先 parseInt
    const val = parseInt(arr[i]);
    let temp = Math.max(maxArr[i - 1] + val, val);
    if (temp > max) {
      max = temp;
    }
    maxArr[i] = temp;
  }
  return max;
}