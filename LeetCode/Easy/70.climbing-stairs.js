/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
// 到第 i 阶台阶有两种可能
// 先到第 i - 1阶，然后走一阶到第 i 阶
// 先到第 i - 2阶，然后直接走两阶到第 i 阶
// dp[i] 表示走到第 i 阶有多少种方式
// dp[i] = dp[i - 1] + dp[i - 2]
var climbStairs = function(n) {
  if (n <= 0) return 0;
  let res = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
};

