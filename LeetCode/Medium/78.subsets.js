/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 排列组合问题合集
// https://leetcode.com/problems/subsets/discuss/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)

// 比如求 [1, 2, 3] 的所有组合
// [] [1] [1, 2] [1, 2, 3] [1, 3] [2] [2, 3] [3]
var subsets = function(nums) {
  let res = [];
  pemutation(nums, [], 0, res);
  return res;
};

function pemutation(nums, tmp, index, res) {
  res.push([...tmp]);
  for(let i = index; i < nums.length; i++) {
    tmp.push(nums[i]);
    pemutation(nums, tmp, i + 1, res);
    tmp.pop();
  }
}
