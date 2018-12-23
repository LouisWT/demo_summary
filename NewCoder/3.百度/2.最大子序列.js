const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const str = line.split(' ')[0];
  findMax(str);
})

function findMax(str) {
  if (!str) return '';
  let maxOne;
  let max = new Array(str.length);
  let prev;
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      maxOne = str[0];
      prev = str[0];
      max[0] = maxOne;
      continue;
    }
    const temp = max[i - 1];
    let index;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] < str[i]) {
        index = j;
        break;
      }
    }
    const res = temp.slice(0, index);
    max[i] = res + str[i];
  }
  console.log(max[max.length - 1])
}