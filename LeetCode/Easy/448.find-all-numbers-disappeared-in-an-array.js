/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 主要就是要知道哪些位置的元素出现了，哪些位置的元素没出现
// 由于元素是 1 ~ n 可以用数组的下标对应，那么如果这个元素出现了，就将对应下标的元素置为负数
// 最后遍历如果发现有元素不是负数，说明这个位置并没有被取到，说明这个位置就是没出现的数
var findDisappearedNumbers = function(nums) {
  if (!nums || nums.length === 0) return [];
  for (let i = 0; i < nums.length; i++) {
    let pos = Math.abs(nums[i]) - 1;
    if (nums[pos] > 0) {
      nums[pos] = -nums[pos];
    }
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};

