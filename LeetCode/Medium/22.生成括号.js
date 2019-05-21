/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (54.21%)
 * Total Accepted:    323.6K
 * Total Submissions: 596.6K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
// 最高嵌套层次 + 单独的括号数等于总的括号数
var generateParenthesis = function(n, str = '', res = [], open = 0, close = 0) {
  if (str.length === n * 2) {
    res.push(str);
    return;
  }
  if (open < n) {
    generateParenthesis(n, str + '(', res, open + 1, close);
  }
  if (close < open) {
    generateParenthesis(n, str + ')', res, open, close + 1);
  }
  return res;
};

