/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//   if (!s && !p) return true;
//   if (!s && p) return calcRes(p, 0);
//   else if (!s) return false;
//   if (!p) return false;
//   return match(s, p, 0, 0);
// };

// function match(s, p, i, j, curr) {
//   if (i >= s.length && j >= p.length) return true;
//   if (i >= s.length && j < p.length) return calcRes(p, j);
//   if (j >= p.length && !curr) return false;
//   if (curr && (s[i] === curr || curr === '.')) {
//     return match(s, p, i + 1, j, curr) || match(s, p, i, j);
//   }
//   // 如果模式是 a - z 之间的字母
//   // 如果后面不是 *,可以匹配一个字母
//   // 如果后面是 *，可以匹配 0 ~ 多个字母
//   if (p[j] != '*') {
//     if (p[j+1] !== '*') {
//       if (s[i] === p[j] || p[j] === '.') return match(s, p, i + 1, j + 1);
//       else return false;
//     } else {
//       if (s[i] !== p[j] && p[j] !== '.') return match(s, p, i, j + 2);
//       else return match(s, p, i, j + 2) || match(s, p, i + 1, j + 2, p[j]);
//     }
//   } else {
//     return match(s, p, i, j + 1);
//   }
// }

// function calcRes(p, j) {
//   let flag = 0;
//   for (let k = j; k < p.length; k++) {
//     if (p[k] !== '*') flag++;
//     else if (flag > 0 && flag <= 1) flag--;
//     else if (flag > 1) return false;
//   }
//   if (flag === 0) return true;
//   else return false;
// }

// 1. 动态规划解决问题
// res[i+1][j+1] 表示 s 直到第 i 个字符和 p 直到第 j 个字符的匹配情况
// res[0][0] 表示 s 和 p 都为空，所以为 true
// res[0][j + 1] 表示 s 为空，p 的第 j 个字符是否和空字符串匹配，当 p 的第 j 个字符是 *，并且第j-2个字符都是匹配（res[0][j - 1]）的，那么第 j 个字符就和 空字符串匹配
function isMatch(s, p) {
  if (!s && !p) return true;
  let res = [];
  for (let i = 0; i < s.length + 1; i++) {
    res.push(new Array(p.length + 1));
  }
  res[0][0] = true;
  for (let j = 1; j < p.length; j++) {
    // s 为空字符串的情况下，p 匹配的情况
    if (p[j] === '*' && res[0][j - 1]) {
      res[0][j + 1] = true;
    }
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (s[i] === p[j] || p[j] === '.') res[i + 1][j + 1] = res[i][j];
      else if (p[j] === '*') {
        // 如果 pj 是 * 并且前一个字符不匹配，那么 x* 就相当于跳过了，并且当前字符没有被匹配
        if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
          res[i + 1][j + 1] = res[i + 1][j - 1];
        } else {
        // pj 是 * ，并且前一字符匹配，那么有三种情况
        // x* 匹配 0 个 res[i][j + 1]
        //    匹配 1个 res[i][j]
        //    匹配多个 res[i + 1][j - 1]
          res[i + 1][j + 1] = (res[i + 1][j - 1] || res[i][j] || res[i][j + 1]);
        }
      }
    }
  }
  return res[s.length][p.length] === true;
}
