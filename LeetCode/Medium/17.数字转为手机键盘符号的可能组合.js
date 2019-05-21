/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (41.11%)
 * Total Accepted:    372.8K
 * Total Submissions: 906.6K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

let map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
// 1. 这个方法空间复杂度有点高
var letterCombinations = function(digits, i = 0) {
  if (!digits) return [];
  let res = [];
  let stri = map[digits[i]].split('');
  // 如果到最后一个字符了，那么就直接返回 stri
  if (i === digits.length - 1) return stri;
  let other = letterCombinations(digits, i + 1);
  for (let j = 0; j < stri.length; j++) {
    for (let k = 0; k < other.length; k++) {
      res.push(stri[j] + other[k]);
    }
  }
  return res;
};


// 2. 改用循环
// 结果是占用空间并没有少多少。。。
// 应该是因为每次还是会声明一个新 res 导致的
var letterCombinations = function(digits) {
  if (!digits) return [];
  digits = digits.split('');
  // 初始化必须是带一个空白字符，否则第一次进不了内层循环
  let res = [''];
  while (digits.length > 0) {
    let num = digits.pop();
    let strs = map[num].split('');
    let tmp = res;
    res = [];
    for (let i = 0; i < strs.length; i++) {
      for (let j = 0; j < tmp.length; j++) {
        res.push(strs[i] + tmp[j]);
      }
    }
  }
  return res;
}
