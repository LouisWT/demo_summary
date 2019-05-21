/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分查找的三个要点
// while(lo <= hi) 必须是 <=
// mid = Math.floor((lo + hi) / 2)，对 JS来说必须有　Math.floor
// 必须有 > < = 三个判断分支, 大于和小于的分支，操作是必须的，否则可能会无法出 while 循环
//  > hi = mid - 1;
//  < lo = mid + 1;
//  = 直接返回 mid 或者随意发挥
var searchRange = function(nums, target) {
  if (!nums || nums.length == 0) return [-1, -1];
  let min = binarySearch(nums, target, 0, nums.length - 1, true);
  if (min === -1) return [-1, -1];
  let max = binarySearch(nums, target, min, nums.length - 1, false);
  return [min, max];
};

searchRange([5,7,7,8,8,10], 8);

function binarySearch(nums, target, lo, hi, min) {
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > target) {
      hi = mid - 1;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      // 如果是找最小值，并且前一个值等于当前值，那么就继续改变 hi
      // 如果是找最大值，并且后一个值等于当前值，那么就继续改变 lo
      // 如果前两个都不满足，说明 mid 是等于 target 的值的边界，返回 mid
      if (min && mid > 0 && nums[mid - 1] === nums[mid]) {
        hi = mid - 1;
      } else if (!min && mid < nums.length - 1 && nums[mid + 1] === nums[mid]){
        lo = lo + 1;
      } else {
        return mid;
      }
    }
  }
  return -1;
}


