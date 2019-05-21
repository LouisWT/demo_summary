/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  if (!s) return s.length;
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') break;
    length++;
  }
  return length;
};

