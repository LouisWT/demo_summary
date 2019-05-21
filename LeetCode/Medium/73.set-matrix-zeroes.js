/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = '#';
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '#') {
        setZero(matrix, i, j);
      }
    }
  }
};

function setZero(matrix, i, j) {
  for (let k = 0; k < matrix[0].length; k++) {
    if (matrix[i][k] !== '#') matrix[i][k] = 0;
  }
  for (let k = 0; k < matrix.length; k++) {
    if (matrix[k][j] !== '#') matrix[k][j] = 0;
  }
  matrix[i][j] = 0;
  return;
}
