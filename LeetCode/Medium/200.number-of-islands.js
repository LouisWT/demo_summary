/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 找到一个1，那就将它相邻的所有1置0
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        search(grid, i, j);
      }
    }
  }
  return count;
};

function search(arr, i, j) {
  if (i < 0 || i >= arr.length || j < 0 || j >= arr[0].length || arr[i][j] === '0') return;
  arr[i][j] = '0';
  search(arr, i - 1, j);
  search(arr, i + 1, j);
  search(arr, i, j - 1);
  search(arr, i, j + 1);
}

