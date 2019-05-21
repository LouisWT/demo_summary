/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 记录两个值
// 一个值是目前得到的最大正值
// 一个值是目前得到的最小负值（绝对值最大的负值）
// 当遍历到一个新元素
// 如果这个值是正的，那么新的最大正值就是当前值乘过去的最大正值与当前值间的最大值
//                     新的最小负值就是当前值乘过去的最小赋值
// 如果这个值是负的，那么新的最大正值就是当前值乘过去的最小负值
//                     新的最小负值就是当前值乘过去的最大正值与当前值间的最小值
var maxProduct = function(nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  let minNeg = 0;
  let maxPos = 0;
  if (nums[0] >= 0) {
    maxPos = nums[0];
    minNeg = 0;
  } else {
    maxPos = 0;
    minNeg = nums[0];
  }
  for (let i = 1; i < nums.length; i++) {
    let mul1 = maxPos * nums[i];
    let mul2 = minNeg * nums[i];
    if (nums[i] >= 0) {
      maxPos = Math.max(mul1, nums[i]);
      minNeg = mul2;
    } else {
      maxPos = mul2;
      minNeg = Math.min(mul1, nums[i]);
    }
    if (maxPos > max) max = maxPos;
  }
  return max;
};
