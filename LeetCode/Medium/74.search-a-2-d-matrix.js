/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 从右上角找
  if (!matrix || matrix.length === 0) return false;
  let i = 0;
  let j = matrix[0].length - 1;
  while ((i <= matrix.length - 1) && j >= 0) {
    while(j >= 0) {
      if (matrix[i][j] < target) break;
      if (matrix[i][j] === target) return true;
      j--;
    }
    if (matrix[i][j] > target) break;
    while (i <= matrix.length - 1) {
      if (matrix[i][j] > target) break;
      if (matrix[i][j] === target) return true;
      i++;
    }
  }
  return false;
};

