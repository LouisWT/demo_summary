/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 0) return [[]];
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }
  let rowSta = 0;
  let rowEnd = n - 1;
  let colSta = 0;
  let colEnd=  n - 1;
  let count = 1;
  while (rowSta < rowEnd && colSta < colEnd) {
    // 第一行
    for (let i = colSta; i <= colEnd; i++) {
      res[rowSta][i] = count++;
    }
    rowSta++;

    // 最后一列
    for (let i = rowSta; i <= rowEnd; i++) {
      res[i][colEnd] = count++;
    }
    colEnd--;

    // 最后一行
    for (let i = colEnd; i >= colSta; i--) {
      res[rowEnd][i] = count++;
    }
    rowEnd--;

    // 第一列
    for (let i = rowEnd; i >= rowSta; i--) {
      res[i][colSta] = count++;
    }
    colSta++;
  }

  if (rowSta === rowEnd) {
    for (let i = colSta; i <= colEnd; i++) {
      res[rowSta][i] = count++;
    }
  } else if (colSta === colEnd) {
    for (let i = rowSta; i <= rowEnd; i++) {
      res[i][colSta] = count++;
    }
  }
  return res;
};

