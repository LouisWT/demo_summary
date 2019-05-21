/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
let map = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000,
}
// 第一遍，用的递归的方法，但是感觉用循环占用的空间应该会更小
var romanToInt = function(s) {
  return getSum(s, 0, 0);
};

function getSum(s, i, sum) {
  if (i >= s.length) return sum;
  let curr;
  if (s.length - i >= 2) {
    curr = map[s[i] + s[i+1]];
    if (curr) return getSum(s, i + 2, sum + curr);
  }
  curr = map[s[i]];
  return getSum(s, i + 1, sum + curr);
}

// 这是循环方法
function romanToInt(s) {
  let sum = 0;
  let i = 0;
  while (i < s.length) {
    let curr;
    if (s.length - i >= 2) curr = map[s[i] + s[i+1]];
    if (curr) {
      sum += curr;
      i += 2;
    } else {
      curr = map[s[i]];
      sum += curr;
      i += 1;
    }
  }
  return sum;
}