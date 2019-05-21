/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || nums.length === 0) return 0;
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > target) {
      hi = mid - 1;
    } else if (nums[mid] < target) {
      lo = mid +  1;
    } else {
      return mid;
    }
  }
  // 如果没有找到才会到这步
  // 说明一定不满足 lo <= hi 的条件循环了，也就是 lo > hi
  // 前一步是 lo === hi
  // 如果 nums[mid] < target，lo = mid + 1，并且最终插入的位置应当是 mid + 1
  // 如果 nums[mid] > target hi = mid - 1， 并且最终插入的位置应当是 mid - 1（mid - 1以及以后的元素往后挪一位）
  // 所以可以看到最终返回的位置其实就是 lo
  return lo;
};
