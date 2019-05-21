/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 比如 [1, 2, 3] 的排列
// 1 + (2, 3) 的排列，一共 2! 共2种排列
// 2 + (1, 3) 的排列，一共 2! 共2种排列
// 3 + (1, 2) 的排列，一共 2! 共2种排列
// 如果要求第五个，那么肯定是 3 开头
// 第一位除外后，要求剩下位的第 5 - 2 * 2 = 1 种排列
// (1, 2) 是剩下的序列
// 1 + (2) 一种排列
// 2 + (1) 一种排列
// 第一种排列一定是 1 开头

// 其实可以想成是一个树的遍历
var getPermutation = function(n, k) {
  let res = '';
  let nums = [];
  // 求不同位数的阶乘
  // 0 1 2 ... n - 1
  // [1, 1, 2, 6, 24..., (n-1)!]
  let fac = [1];
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    nums.push(i);
    sum *= i;
    fac.push(sum);
  }
  // 非常关键，不然索引不对
  // 减1是因为都是从0开始的
  k--;
  for (let i = n - 1; i >= 0; i--) {
    let index = Math.floor(k / fac[i]);
    res += nums[index];
    nums.splice(index, 1);
    k -= index * fac[i];
  }
  return res;
};
