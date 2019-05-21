/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 计算一个数字的二进制表示的1的个数时
// 首先将它与 1 进行与操作，获取最低一位是0还是1，将它与 count 相加
// 然后进行右移操作，从而除以2
var hammingDistance = function(x, y) {
  let res = x ^ y;
  let count = 0;
  while (res > 0) {
    count += res & 1;
    res = res >> 1;
  }
  return count;
};

