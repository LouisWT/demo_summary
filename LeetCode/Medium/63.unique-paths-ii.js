/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 动态规划
// 如果当前位置有障碍，那么可能性一定是 0
// 如果当前位置没有障碍，那么就是它上面或者左面的可能性相加
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid) return 0;
  let dp = [];
  for (let i = 0; i < obstacleGrid.length; i++) {
    dp[i] = [];
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) dp[0][0] = 1;
      else if (i === 0) dp[i][j] = dp[i][j-1];
      else if (j === 0) dp[i][j] = dp[i-1][j];
      else dp[i][j] = dp[i][j-1] + dp[i-1][j];
    }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

