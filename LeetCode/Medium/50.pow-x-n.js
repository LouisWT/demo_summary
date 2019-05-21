/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;
  let sign = Math.sign(n) > 0;
  n = Math.abs(n);
  let num = calc(x, n);
  if (!sign) num = 1 / num;
  return num;
};

// 使用指数的增长速度来计算，从而提升速度
function calc(x, n) {
  let count = 1;
  let num = x;
  while ((count + count) <= n) {
    count += count;
    num *= num;
  }
  if (n > count) {
    num *= calc(x, n - count);
  }
  return num;
}

// 别人的简洁版
function myPow(x, n) {
  if (n == 0) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  return (n % 2 === 0) ? myPow(x * x, Math.floor(n / 2)) : x * myPow(x * x, Math.floor((n - 1) / 2));
}
