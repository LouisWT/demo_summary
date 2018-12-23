var func = function(m, n) {
  arguments[0] = 3;
  arguments[1] = 2;
  m = 2;
  arguments[0] = 3
  return m + n;
}
// 居然是 5
console.log(func(1, 1));
