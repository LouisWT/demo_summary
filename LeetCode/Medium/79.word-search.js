/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  let used = [];
  for (let i = 0; i < board.length; i++) {
    let tmp = new Array(board[0].length);
    tmp.fill(false);
    used.push(tmp);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let res = search(board, i, j, 0, word, used);
      if (res) return true;
    }
  }
  return false;
};


function search(board, i, j, index, target, used) {
  if (index >= target.length) return true;
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
  if (board[i][j] === target[index] && !used[i][j]) {
    used[i][j] = true;
    let res = search(board, i - 1, j, index + 1, target, used)
           || search(board, i + 1, j, index + 1, target, used)
           || search(board, i, j - 1, index + 1, target, used)
           || search(board, i, j + 1, index + 1, target, used);
    // 回退的时候将 used 置回 false
    used[i][j] = false;
    return res;
  } else {
    return false;
  }
}

