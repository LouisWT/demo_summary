/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 1. 最小的负数除去 -1 会溢出
// 2. 使用指数的增长来提升除法速度
var divide = function(dividend, divisor) {
  if (divisor === 0) return 2**31 - 1;
  if (dividend === 0) return 0;
  // 假设的范围是 [-2**31, 2**31-1]，所以如果是负数最小除以 -1，那么将越界，所以这种情况下应当返回最大值
  if (dividend === -(2**31) && divisor === -1) return 2**31 - 1;
  let sign = Math.sign(dividend) === Math.sign(divisor) ? true : false;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let res = binaryDivide(dividend, divisor);
  if (!sign) res = -res;
  return res;
};

// 这里是类似二分查找的策略
// 乘数是 1 2 4 16 ... 这样二倍二倍的搜索，这样更快
function binaryDivide(dividend, divisor) {
  if (dividend < divisor) return 0;
  let count = 1;
  let sum = divisor;
  while ((sum + sum) <= dividend) {
    sum += sum;
    count += count;
  }
  return count + binaryDivide(dividend - sum, divisor);
}

