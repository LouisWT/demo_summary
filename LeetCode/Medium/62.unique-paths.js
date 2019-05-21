/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 1. 数学方法
// m * n 的格子
// 需要向右走 m-1 次
// 需要向下走 n-1 次
// 如果已经向右走了 m - 1 步，那么剩下的步数只能向下走 n - 1 步
// 这其实就是在 (m - 1 + n - 1) 步中，挑 m - 1 步来向右走，剩下 n - 1 步就确定了
// C(m - 1 + n - 1, m - 1)
var uniquePaths = function(m, n) {
  let total = m - 1 + n - 1;
  // [1, 1, 2, 6, 24 ...]
  // [0!,1!, 2!, 3!, 4!..., (m + n -2)!]
  let mul = [1];
  let num = 1;
  for(let i = 1; i <= total; i++) {
    num *= i;
    mul.push(num);
  }
  return mul[total] / (mul[m-1] * mul[n-1])
};


// 2. 动态规划
// 慢很多
function uniquePaths(m, n) {
  let res = [];
  for (let i = 0; i < m; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++) {
      if (i == 0 | j == 0) res[i][j] = 1;
      else res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }
  return res[m-1][n-1];
}
