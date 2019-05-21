/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (!nums || nums.length <= 1) return true;
  let far = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (i > far) return false;
    far = Math.max(nums[i] + i, far);
  }
  return true;
};
