/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 两个指针，一个指针i指向目前找到的0值，另一个指针j指向目前找到的非0值
// 如果i < j，说明 0 在非 0 值后面，所以交换
// 如果i >= j，那么还需要确认 i 后面是否有非0值，所以让 j = i + 1
var moveZeroes = function(nums) {
  if (!nums || nums.length === 0) return nums;
  // i 表示目前找到的0的位置
  let i = 0;
  // j 表示目前找到的非0的位置
  let j = 0;
  while(i < nums.length && j < nums.length) {
    while (nums[i] !== 0) {
      i++;
      if (i === nums.length) return nums;
    }
    while (nums[j] === 0) {
      j++;
      if (j === nums.length) return nums;
    }
    if (i < j) {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
      j++;
    } else {
      j = i + 1;
    }
  }
  return nums;
};