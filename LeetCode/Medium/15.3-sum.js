/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.77%)
 * Total Accepted:    523.5K
 * Total Submissions: 2.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 关键在于把问题退化为 2SUM
// 这个问题至少是个 o(n2)，所以可以先排序
var threeSum = function(nums) {
  // 先排序，快排的话是 o(nlgn)
  nums = nums.sort((a, b) => a > b ? 1 : -1);
  let res = [];
  for (let i = 0; i + 2 < nums.length; i++) {
    // 防止出现重复的答案
    if(i > 0 && nums[i - 1] === nums[i]) continue;
    let target = -nums[i];
    // 这里将问题退化为 2Sum
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[j] + nums[k] < target) {
        j++;
      } else if (nums[j] + nums[k] > target) {
        k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        // 下面是为了防止重复答案
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
    }
  }
  return res;
};

threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);

