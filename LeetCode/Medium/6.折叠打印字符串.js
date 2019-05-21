/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (31.34%)
 * Total Accepted:    305.6K
 * Total Submissions: 974.9K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 初始化一个 N 个元素的数组，表示有 N 行，每行都是数组，表示每行的字符
// 关键是要将字母按顺序一点点塞进去，偶数列有可以保存 N 个元素，奇数列的头尾两行只能保存空字符
var convert = function(s, numRows) {
  if (!s) return '';
  if (numRows <= 1) return s;
  let res = new Array(numRows);
  res.fill('');
  let pos = 0;
  while (pos < s.length) {
    // 关键这里要加上 pos < s.length，否则最后的字符串中可能会有 undefined
    for (let i = 0; i < numRows && pos < s.length; i++) {
      res[i] += s[pos++];
    }
    // 关键这里要加上 pos < s.length，否则最后的字符串中可能会有 undefined
    for (let i = numRows - 2; i > 0 && pos < s.length; i--) {
      res[i] += s[pos++];
    }
  }
  let tmp = '';
  for (let i = 0; i < res.length; i++) {
    tmp += res[i];
  }
  return tmp;
};