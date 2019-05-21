/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 使用 dp[i] 表示 nums 中的数字是否能表示 i
// 遍历 nums，每遍历一个新数字，就确认一遍目前能确认 nums[i] ~ target 中的哪些数字
// 从 target 到 nums[i] 降序确认，防止重复使用当前数字
var canPartition = function(nums) {
  if (!nums || nums.length === 0) return true;
  // 和如果是奇数，肯定不行
  let target = nums.reduce((a, b) => a + b, 0);
  if (target % 2 === 1) return false;
  target = target / 2;
  let dp = new Array(target + 1);
  dp.fill(false);
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      // 如果 j > nums[i], 如果 dp[j - nums[i]] 为 true（可以用 nums[i]之前的数字表示 j - nums[i]），那么 dp[j] 也为 true
      // 当 j === nums[i]
      // 那么 dp[j] = true，表示可以用 nums 中的元素表示 j
      // 这里让 j 从 target 递减到 nums[i]，是为了防止重复使用 nums[i]
      // 比如 target 是20，而 nums[i] 是 10
      // 如果 j 从 nums[i] 递增到 20，那么首先会将 dp[10] 设置为 true
      // 当 j 递增到 20 时，j - nums[i] 又等于 10，会将 dp[20] 设置为true，但是这时其实是重复利用了同一个 10
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  return dp[target];
};

