/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return "";
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let curr = strs[i];
    let j;
    for (j = 0; j < res.length; j++) {
      if (curr[j] !== res[j]) break;
    }
    res = res.slice(0, j);
  }
  return res;
};

