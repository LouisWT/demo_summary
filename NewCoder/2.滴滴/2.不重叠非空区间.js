const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let count = 0;
rl.on('line', (line) => {
  let length = 0;
  let arr;
  if (count == 0) {
    length = parseInt(line);
    count = 1;
  }
  else if (count == 1) {
    arr = line.split(' ');
    getN(arr);
  }
})

function getN(arr) {
  if (!arr) return;
  const map = new Map();
  let zero = 0;
  for (let i = 0; i < arr.length - 1; i++) {
      const val = parseInt(arr[i]);
      if (val === 0) {
          zero++;
          continue;
      }
      const count = map.get(val) === undefined ? 1 : map.get(val) + 1;
      map.set(val, count);
  }
  let count = 0;
  for (let [key, value] of map) {
    if (value % 2 == 0) count += value / 2;
  }
  console.log(count + zero)
}