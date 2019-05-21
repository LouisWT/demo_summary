/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (
      (s[i] === ')' && top === '(') ||
      (s[i] === '}' && top === '{') ||
      (s[i] === ']' && top === '[')
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

