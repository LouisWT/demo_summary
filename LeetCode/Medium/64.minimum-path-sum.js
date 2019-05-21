/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let res = [];
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) res[i][j] = grid[i][j];
      else if (i === 0) res[i][j] = res[i][j - 1] + grid[i][j];
      else if (j === 0) res[i][j] = res[i - 1][j] + grid[i][j];
      else res[i][j] = Math.min(res[i][j - 1], res[i - 1][j]) + grid[i][j];
    }
  }
  return res[m-1][n-1];
};
minPathSum([[1,3,1],[1,5,1],[4,2,1]])
