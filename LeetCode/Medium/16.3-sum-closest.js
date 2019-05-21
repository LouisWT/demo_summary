/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (43.91%)
 * Total Accepted:    322.9K
 * Total Submissions: 735.3K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1. 最蠢的办法，完全没结合 3SUM
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a > b ? 1 : -1);
  let min = Infinity;
  let closest;
  for (let i = 0; i + 2 < nums.length; i++) {
    for (let j = i + 1; j + 1< nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (Math.abs(nums[i] + nums[j] + nums[k] - target) < min) {
          min = Math.abs(nums[i] + nums[j] + nums[k] - target);
          closest = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }
  return closest;
};
// 2. 结合了 3SUM的思想，我刚开始想着这是绝对值，不能用简单的比较指针，然而真是想复杂了
// 既然已经排序了，那么就是 SUM 越靠近 target 越好啊
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a > b ? 1 : -1);
  // 保存当前的 closest 与 target 的差的绝对值
  let min = Infinity;
  // 保存与 target 最接近的值
  let closest;
  for (let i = 0; i + 2 < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < min) {
        closest = sum;
        min = Math.abs(sum - target);
      }
      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return closest;
};

