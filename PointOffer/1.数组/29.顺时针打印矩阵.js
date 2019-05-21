// p 161
// 输入一个矩阵，按照从外向里以顺时针顺序依次打印每个数字

function printMatrix(matrix) {
    if (!matrix) return;
    let rowSta = 0
    let rowEnd = matrix.length - 1;
    let colSta = 0;
    let colEnd = matrix[0].length - 1;
    const arr = [];
    while (rowSta < rowEnd && colSta < colEnd) {
        // 打印第一行
        for (let i = colSta; i <= colEnd; i++) {
            arr.push(matrix[rowSta][i]);
        }
        rowSta++;
        // 打印最后一列
        for (let i = rowSta; i <= rowEnd; i++) {
            arr.push(matrix[i][colEnd]);
        }
        colEnd--;
        // 打印最后一行
        for (let i = colEnd; i >= colSta; i--) {
            arr.push(matrix[rowEnd][i]);
        }
        rowEnd--;
        // 打印第一列
        for (let i = rowEnd; i >= rowSta; i--) {
            arr.push(matrix[i][colSta])
        }
        colSta++;
    }
    if (rowSta == rowEnd) {
        for (let i = colSta; i <= colEnd; i++) {
            arr.push(matrix[rowSta][i])
        }
    } else if (colSta == colEnd) {
        for (let i = rowSta; i <= rowEnd; i++) {
            arr.push(matrix[i][colSta]);
        }
    }
    return arr;
}
