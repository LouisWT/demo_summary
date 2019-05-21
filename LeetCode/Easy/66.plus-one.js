/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (!digits || digits.length === 0) return [];
  let up = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + up;
    if (sum < 10) {
      digits[i] = sum;
      up = 0;
      break;
    }
    digits[i] = sum % 10;
    up = Math.floor((sum - sum % 10) / 10);
  }
  if (up > 0) {
    digits.unshift(up);
  }
  return digits;
};
