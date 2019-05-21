/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 用首尾指针法
// 前面的指针指向从头到第一个等于 val 的位置
// 后面的指针指向从尾到第一个不等于 val 的位置
// 将两个位置的数互换
// 最后的长度就是前面的指针的位置
var removeElement = function(nums, val) {
  if (!nums || nums.length === 0) return 0;
  let lo = -1;
  let hi = nums.length;
  while(lo < hi) {
    while (nums[++lo] !== val) {
      if (lo > nums.length - 1) break;
    }
    while (nums[--hi] === val) {
      if (hi < 0) break;
    }
    if (lo < hi) {
      nums[lo] = nums[hi];
      nums[hi] = val;
    }
  }
  return lo;
};
removeElement()
