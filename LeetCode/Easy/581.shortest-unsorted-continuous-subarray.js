/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 先从头尾找出失序的位置
// 然后在失序的序列中找出 max 和 min
// 然后拓展失序序列，将前面比min更大的数和后面比 max 更小的数加入失序序列
var findUnsortedSubarray = function(nums) {
  if (!nums || nums.length <= 1) return 0;
  let lo = 0;
  while (lo < nums.length) {
    if (nums[lo] <= nums[lo + 1]) lo++;
    else break;
  }
  let hi = nums.length - 1;
  while (hi > 0) {
    if (nums[hi - 1] <= nums[hi]) hi--;
    else break;
  }
  let min = nums[lo + 1];
  let max = nums[hi - 1];
  for (let i = lo; i <= hi; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }
  while (lo > 0) {
    if (nums[lo - 1] > min) lo--;
    else break;
  }
  while (hi < nums.length - 1) {
    if (max > nums[hi + 1]) hi++;
    else break;
  }
  // 如果序列有序，那么 lo > hi
  if (lo > hi) return 0;
  return hi - lo + 1;
};
