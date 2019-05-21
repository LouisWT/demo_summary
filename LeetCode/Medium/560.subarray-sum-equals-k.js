/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 时间复杂度 o(n^2)
// 空间复杂度 o(1)
var subarraySum = function(nums, k) {
  if (!nums || nums.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum === k) count++;
    for (let j = i - 1; j >= 0; j--) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }
  return count;
};

// 关键是求子串 i ~ j 的和，i ~ j 的和可以表示为 0 ~ j 的和减去 0 ~ i 的和
// 所以遍历求和，每次求得一个和 sum，就计算 sum - k 是否在之前的和中出现过
// 如果出现过，说明sum - 之前的 sum 可以得到 k，也就是说这是其中一个子串
// 时间复杂度 O(n)
// 空间复杂度 O(n)
function subarraySum(nums, k) {
  let sum = 0;
  let result = 0;
  let preSum = new Map();
  preSum.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (preSum.has(sum - k)) {
      result += preSum.get(sum - k);
    }
    let tmp = preSum.get(sum);
    preSum.set(sum, (tmp || 0) + 1);
  }
  return result;
}
