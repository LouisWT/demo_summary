/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray = function(nums) {
  if (!nums || nums.length === 0) return 0;
  let max = nums[0];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curr = Math.max(prev + nums[i], nums[i]);
    if (curr > max) max = curr;
    prev = curr;
  }
  return max;
};
