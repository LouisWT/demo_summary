/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (30.18%)
 * Total Accepted:    224.8K
 * Total Submissions: 744.9K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 与 3SUM 很类似，只是用 两层循环来代替了 3SUM的最外层循环
// 所以这种问题基本上就是　3SUM 降为 o(n^2) 的复杂度
// 4SUM降为 o(n^3) 的复杂度
// 所以 KSUM就是，先降为 K-2 层的循环，然后最终是一个 2SUM 问题，用前后指针法
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a > b ? 1 : -1);
  let res = [];
  for (let i = 0; i + 3 < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j + 2 < nums.length; j++) {
      if ((j > i + 1) && nums[j] === nums[j - 1]) continue;
      let k = j + 1;
      let h = nums.length - 1;
      while (k < h) {
        if (nums[i] + nums[j] + nums[k] + nums[h] === target) {
          res.push([nums[i], nums[j], nums[k], nums[h]]);
          while (k < h && nums[k] === nums[k + 1]) k++;
          while (k < h && nums[h] === nums[h - 1]) h--;
          k++;
          h--;
        } else if (nums[i] + nums[j] + nums[k] + nums[h] < target) {
          k++;
        } else {
          h--;
        }
      }
    }
  }
  return res;
};
fourSum([1, 0, -1, 0, -2, 2], 0)


