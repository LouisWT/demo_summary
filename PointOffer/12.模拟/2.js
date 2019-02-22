var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

rl.on('line', function (line) {
  let [x, f, d, p] = line.split(' ');
  x = parseInt(x)
  f = parseInt(f)
  d = parseInt(d)
  p = parseInt(p)
  if (d <= 0) return console.log(0);
  if (x == 0 && d == 0) return;
  if(isNaN(x) || isNaN(f) || isNaN(d) || isNaN(p)) {
    return;
  }
  calc(d, x, f, p)
});

function calc(d, x, f, p) {
  let y = Math.floor(d / x);
  if (y <= f) {
    console.log(y)
  } else {
    y = Math.floor((d + p * f) / (x + p))
    console.log(y)
  }
}