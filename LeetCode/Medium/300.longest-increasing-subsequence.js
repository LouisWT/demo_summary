/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// len[i] 保存从0到i的序列中，包括元素 i 的最长的递增子序列长度
// o(n^2)的时间复杂度
var lengthOfLIS = function(nums) {
  if (!nums || nums.length === 0) return 0;
  let len = [1];
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    let tmp = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && len[j] > tmp) {
        tmp = len[j];
      }
    }
    len[i] = tmp + 1;
    if (len[i] > max) max = len[i];
  }
  return max;
};

// tails 保存遍历到的最长递增子序列
// 当遍历到一个新元素时，找到当前元素在 tail 中的位置
// 如果比任何元素大，那么在 tails 中插入该元素
// 否则用该元素替换tails 中的某个元素，并且让 tails 保持有序
// 比如 [2, 5, 1, 7, 6]
// tails 变化如下
// [2]
// [2, 5]
// [1, 5]
// [1, 5, 7]
// [1, 5, 6]
// 最后虽然得到的不是正确的 [2, 5, 6]，1 替换了 2 的位置，但是长度肯定是正确的
function lengthOfLIS(nums) {
  let tails = [];
  for (let x of nums) {
    let i = 0;
    let j = tails.length;
    while (i !== j) {
      let m = Math.floor((i + j) / 2);
      if (tails[m] < x) i = m + 1;
      else j = m;
    }
    tails[i] = x;
  }
  return tails.length;
}
