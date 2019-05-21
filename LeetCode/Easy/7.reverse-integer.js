/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
// 我的做法，用数组来做，有点繁琐
var reverse = function(x) {
  if (x === 0) return 0;
  let max = (2**31 - 1).toString().split('');
  let min = (2**31).toString().split('');
  let sign = x < 0;
  let strs = Math.abs(x).toString().split('').reverse();
  // 将开头的 0 去掉
  while (true) {
    if (strs[0] === '0') strs.shift();
    else break;
  }
  // 查看是否溢出
  if (strs.length === max.length) {
    for (let i = 0; i < strs.length; i++) {
      let num = sign ? min[i] : max[i];
      // 从高位往低位比较，如果相同则继续比，如果小的话，那么就break，如果大于，则溢出
      if (strs[i] > num) return 0;
      else if (strs[i] < num) break;
    }
  }
  if (sign) return -Number(strs.join(''));
  return Number(strs.join(''));
};

// leetcode
function reverse(x) {
  let prev = 0;
  let res = 0;
  while (x !== 0) {
    res = res * 10 + x % 10;
    // JS 里面是 64 位数字。。。。
    // 下面这个等式只有在超出 [-2 ** 63, 2**63 - 1]才不成立
    if ((res - x % 10) / 10 !== prev) return 0;
    // 针对 JS，加的限制
    if (res < -(2**31) || res > (2**31 - 1)) return 0;
    prev = res;
    x = (x - x % 10) / 10;
  }
  return res;
}
reverse(-123);
