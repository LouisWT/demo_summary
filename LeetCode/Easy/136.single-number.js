/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 两个相同的数异或结果为0
// 对所有数进行异或，最后剩下来的就是单独的数
var singleNumber = function(nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};

