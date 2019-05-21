/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
//   if (matrix.length === 0) return [];
//   let rowSta = 0;
//   let rowEnd = matrix.length - 1;
//   let colSta = 0;
//   let colEnd = rowEnd;
//   let tmp = [];
//   while(rowSta < rowEnd && colSta < colEnd) {
//     // 将当前行的所有元素都复制到最后一列
//     for (let i = colSta; i <= colEnd; i++) {
//       tmp.push(matrix[rowSta][i]);
//     }
//     for (let i = rowSta; i <= rowEnd; i++) {
//       let num = tmp.shift();
//       tmp.push(matrix[i][colEnd]);
//       matrix[i][colEnd] = num;
//     }
//     colEnd--;
//     tmp.shift();

//     // 将最后一列的元素都复制到最后一行
//     for (let i = colEnd; i >= colSta; i--) {
//       let num = tmp.shift();
//       tmp.push(matrix[rowEnd][i]);
//       matrix[rowEnd][i] = num;
//     }
//     rowEnd--;

//     // 将最后一行的数,复制到第一列
//     for (let i = rowEnd; i >= rowSta; i--) {
//       let num = tmp.shift();
//       tmp.push(matrix[i][colSta]);
//       matrix[i][colSta] = num;
//     }
//     colSta++;

//     // 将第一行的数,复制到第一列
//     for (let i = colSta; i <= colEnd; i++) {
//       let num = tmp.shift();
//       matrix[rowSta][i] = num;
//     }
//     rowSta++;

//     tmp = [];
//   }
// };

// 顺时针 90 度就是先对角线交换,然后左右翻折（交换）
function rotate(matrix) {
  let M = matrix.length;
  if (M === 0) return [];
  let N = matrix[0].length;
  // 这里因为题目说明了图片是 N * N
  // 如果不是的话还要多考虑
  // 这里只能翻转上半部分，否则翻两边跟没翻一样
  for (let i = 0; i < M - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      swap(matrix, i, j, j, i);
    }
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < Math.floor(N / 2); j++) {
      swap(matrix, i, j, i, N - 1 - j);
    }
  }
}
function swap(arr, i, j, k, h) {
  let tmp = arr[i][j];
  arr[i][j] = arr[k][h];
  arr[k][h] = tmp;
}

// 如果是要顺时针旋转 180 度，只需要先上下翻折，再左右翻折
// 这里依旧假设是 N * N 矩阵
function rotate(matrix) {
  let M = matrix.length;
  if (M === 0) return [];
  let N = M;
  // 上下翻折
  for (let i = 0; i < Math.floor(M / 2); i++) {
    for (let j = 0; j < N; j++) {
      swap(matrix, i, j, M - 1 - i, j);
    }
  }
  // 左右翻折
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < Math.floor(N / 2); j++) {
      swap(matrix, i, j, i, N - 1 - j);
    }
  }
}

// 如果是要顺时针翻转 270 度，只需要先沿从右上到左下的对角线翻折，然后再左右翻折就好了
// 关键在于翻折时坐标的计算方式
// i , j =>  M-1-j, N-1-i
// 并且只翻折上边，否则都翻一遍和没翻一样，i = [0, M-1) j = [0, N-1-i)
function rotate(matrix) {
  let M = matrix.length;
  if (M === 0) return [];
  let N = M;
  // 斜着翻折
  for (let i = 0; i < M - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      swap(matrix, i, j, M - 1 - j, N - 1 - i);
    }
  }
  // 左右翻折
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < Math.floor(N / 2); j++) {
      swap(matrix, i, j, i, N - 1 - j);
    }
  }
}
