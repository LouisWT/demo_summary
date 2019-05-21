/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function(s) {
//   if(!s) return 0;
//   let count = s.length;
//   let step = 1;
//   while (step < s.length) {
//     for (let i = 0; i + step < s.length; i++) {
//       let tmp = judge(s, i, i + step);
//       if (tmp) count++;
//     }
//     step++;
//   }
//   return count;
// };

// function judge(s, i, j) {
//   let lo = i;
//   let hi = j;
//   while (lo < hi) {
//     if (s[lo] !== s[hi]) return false;
//     lo++;
//     hi--;
//   }
//   return true;
// }

// 以每个字符为中心,判断回文子串
// 回文子串有两种情况,奇数长度和偶数长度
function countSubstrings(s) {
  if (!s) return 0;
  // 由于 i 最多不会到 s.length -1 ,因此count 初始为1,加上这个值
  let count = 1;
  for (let i = 0; i + 1 < s.length; i++) {
    count += check(s, i, i);
    count += check(s, i, i + 1);
  }
  return count;
}

function check(s, i, j) {
  let count = 0;
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    count++;
    i--;
    j++;
  }
  return count;
}
