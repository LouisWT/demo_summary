function bigSum(x, y) {
  if (!x || !y) return x || y;
  x = x.split('');
  y = y.split('');
  let res = [];
  let up = 0;
  while (x.length > 0 && y.length > 0) {
    let a = parseInt(x.pop());
    let b = parseInt(y.pop());
    let val = (a + b + up) % 10;
    up = Math.floor((a + b + up) / 10);
    res.unshift(val);
  }
  let tmp = x.length > 0 ? x : y;
  while (tmp.length > 0) {
    let a = parseInt(tmp.pop());
    let val = (a + up) % 10;
    up = Math.floor((a + up)/10);
    res.unshift(val);
  }
  if (up !== 0) res.unshift(up);
  return res.join('');
}

console.log(bigSum('123456', '123456'))