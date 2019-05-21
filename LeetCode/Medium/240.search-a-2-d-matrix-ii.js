/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  let i = 0;
  let j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    else if (matrix[i][j] < target) i++;
    else j--;
  }
  return false;
};

