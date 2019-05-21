/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let mapRow = new Array(9);
  let mapCol = new Array(9);
  let res = validateRowCol(board, mapRow, mapCol);
  if (!res) return false;
  let sub = validateSub(board, mapRow);
  return sub;
};

function validateRowCol(board, mapRow, mapCol) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num1 = board[i][j];
      if (num1 !== '.') {
        if (!mapRow[num1 - 1]) {
          mapRow[num1 - 1] = true;
        } else {
          return false;
        }
      }
      let num2 = board[j][i];
      if (num2 !== '.') {
        if (!mapCol[num2 - 1]) {
          mapCol[num2 - 1] = true;
        } else {
          return false;
        }
      }
    }
    mapRow.fill();
    mapCol.fill();
  }
  return true;
}

function validateSub(board, map) {
  for (let i = 0; i <= 6; i += 3) {
    for (let j = 0; j <= 6; j += 3) {
      for (let row = i; row < i + 3; row++) {
        for (let col = j; col < j + 3; col++) {
          let num = board[row][col];
          if (num !== '.') {
            if (!map[num - 1]) {
              map[num - 1] = true;
            } else {
              return false;
            }
          }
        }
      }
      map.fill();
    }
  }
  return true;
}

// 这个方法简单还好理解，速度占用双 100%
var isValidSudoku = function(board) {
  let set = new Set();
  for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num === '.') continue;
      let var1 = num + 'row' + i;
      let var2 = num + 'col' + j;
      let var3 = num + 'bol' + Math.floor(i/3) + Math.floor(j/3);
      if (set.has(var1)) return false;
      if (set.has(var2)) return false;
      if (set.has(var3)) return false;
      set.add(var1);
      set.add(var2);
      set.add(var3)
    }
  }
  return true;
}
