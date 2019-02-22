// 长度为n 的绳子，可以剪成任意段，至少剪一刀，目的是让最后每段长度的总乘积最大

// f(n) 长度为n 的绳子最大的总乘积
// f(i) 长度为i 的绳子的最大总乘积
// f(n) = max(f(i) * f(n-i)) 1<= i<= n-1

function calc(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (n == 3) return 2;
  let res = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    let max = 0;
    for (let j = 1; j < Math.floor(i / 2); j++) {
      let tmp = res[j] * res[i - j];
      if (tmp > max) {
        max = tmp
      }
    }
    res[i] = max;
  }
  return res[n];
}
