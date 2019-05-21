/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length == 0) return [];
  let rowSta = 0;
  let rowEnd = matrix.length - 1;
  let colSta = 0;
  let colEnd = matrix[0].length - 1;
  let res = [];
  while (rowSta < rowEnd && colSta < colEnd) {
    // 第一行
    for (let i = colSta; i <= colEnd; i++) {
      res.push(matrix[rowSta][i]);
    }
    rowSta++;

    // 最后一列
    for (let i = rowSta; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd--;

    // 最后一行
    for (let i = colEnd; i >= colSta; i--) {
      res.push(matrix[rowEnd][i]);
    }
    rowEnd--;

    // 第一列
    for (let i = rowEnd; i >= rowSta; i--) {
      res.push(matrix[i][colSta]);
    }
    colSta++;
  }
  if (rowSta === rowEnd) {
    for (let i = colSta; i <= colEnd; i++) {
      res.push(matrix[rowSta][i]);
    }
  } else if (colSta === colEnd) {
    for (let i = rowSta; i <= rowEnd; i++) {
      res.push(matrix[i][colSta]);
    }
  }
  return res;
};

