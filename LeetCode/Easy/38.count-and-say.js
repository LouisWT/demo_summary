/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let prev = '1';
  let next = '';
  for(let k = 1; k < n; k++) {
    let currS = prev[0];
    let tmp = 1;
    for (let i = 1; i < prev.length; i++) {
      if (currS === prev[i]) {
        tmp++;
      } else {
        next += `${tmp}${currS}`;
        currS = prev[i];
        tmp = 1;
      }
    }
    next += `${tmp}${currS}`;
    prev = next;
    next = '';
  }
  return prev;
};
