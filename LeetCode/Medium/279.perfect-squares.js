/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// nums[i] 表示第 i 个数至少有 nums[i] 个平方数组成
// 比如 对于 12，nums[i] 是这样
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
// 0 1 2 3 1 2 3 4 2 1 2  3  3  2  3
// i 由平方数组成，也就是说可以表示成  j^2 + i - j^2的形式（1<= j^2 <= i）
// 因此 nums[i] = min(nums[j**2] + nums[i - j**2]) (1<= j^2 <= i)
var numSquares = function(n) {
  if (n < 1) return 0;
  let nums = [0];
  let curr = 1;
  for (let i = 1; i <= n; i++) {
    // 如果是平方数，这样避免重复计算
    if (i === curr**2) {
      nums[i] = 1;
      curr++;
      continue;
    }
    let max = Infinity;
    for (let j = 1; j**2 <= i; j++) {
      // nums[j**2] + nums[i - j**2]
      // nums[j**2] 一定等于1
      let tmp = nums[j**2] + nums[i - j**2];
      if (tmp < max) max = tmp;
    }
    nums[i] = max;
  }
  return nums[n];
};

