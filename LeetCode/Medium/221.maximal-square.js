/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix || matrix.length === 0) return 0;
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let tmp  = count(matrix, i, j);
      if (tmp > max) max = tmp;
    }
  }
  return max;
};

function count(matrix, i, j) {
  if (matrix[i][j] === "0") return 0;
  let count = 1;
  let step = 1;
  let hasZero = false;
  while (!hasZero) {
    if (i + step >= matrix.length || j + step >= matrix[0].length) break;
    let sum = 0;
    for (let k = i; k <= i + step; k++) {
      if (matrix[k][j + step] === "1") sum++;
      else hasZero = true;
    }
    if (hasZero) break;
    for (let k = j; k < j + step; k++) {
      if (matrix[i + step][k] === "1") sum++;
      else hasZero = true;
    }
    if (!hasZero) count += sum;
    step++;
  }
  return count;
}

// function maximalSquare(matrix) {
//   if (!matrix || matrix.length === 0) return 0;
//   let res = [];
//   for (let i = 0; i <= matrix.length; i++) {
//     res[i] = [];
//   }
//   let max = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (i === 0 || j === 0) {
//         res[i][j] = matrix[i][j] - 0;
//       } else if (matrix[i][j] === '0') {
//         res[i][j] = 0;
//       } else {
//         res[i][j] = Math.min(res[i][j - 1], res[i - 1][j - 1], res[i - 1][j]) + 1;
//       }
//       max = Math.max(max, res[i][j] * res[i][j]);
//     }
//   }
//   return max;
// }


