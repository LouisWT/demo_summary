/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// 不把数字转换成字符串验证是否回文
// 那就将数字通过第 7 题的方法，把它给 reverse 之后，再比较和原数字是否相等
var isPalindrome = function(x) {
  if (x === 0) return true;
  if (x < 0) return false;
  let num = x;
  let rev = 0;
  while (num !== 0) {
    rev = rev * 10 + num % 10;
    num = (num - num % 10) / 10;
  }
  return rev === x;
};


// leetcode 解法，差不多，但是其实只翻转一半就可以了
// 综合来说，这样考虑边界情况比上面更复杂，但是理论上更快
var isPalindrome = function(x) {
  if (x === 0) return true;
  // 对 10 100 这种情况，下面的过程会有问题，所以需要单独拿出来
  if (x < 0  || x % 10 === 0) return false;
  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + x % 10;
    x = (x - x % 10) / 10;
  }
  // 对有奇数个数字的情况，比如 121
  // rev = 12 x = 1
  // 所以要将 rev 除去最后一位
  let odd = (rev - rev % 10) / 10;
  return (rev === x || odd === x);
};
