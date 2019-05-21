/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length === 0) return 0;
  let curr = nums[0];
  let count = 1;
  let i = 1;
  let j = 1;
  while (i < nums.length) {
    if (curr < nums[i]) {
      curr = nums[i];
      nums[j] = nums[i];
      count++;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return count;
};

