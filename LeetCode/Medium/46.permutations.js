/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 比如 [1, 2, 3, 4]
// 1 + (2, 3, 4) 的组合
// 2 + (1, 3, 4) 的组合
// 3 + (2, 1, 4) 的组合
// 4 + (2, 3, 1) 的组合
// (2, 3, 4)
// 2 + (3,4) 的组合
// 3 + (2, 4)的组合
// 4 + (3,2) 的组合
// 以此类推,将当前元素与后面的元素依次交换,然后继续对后面的元素排列
var permute = function(nums) {
  if (!nums || nums.length == 0) return [];
  let res = [];
  calc(nums, 0, res);
  return res;
};

function calc(nums, index, res) {
  if (index === nums.length) return res.push([...nums]);
  for (let i = index; i < nums.length; i++) {
    swap(nums, index, i);
    calc(nums, index + 1, res);
    swap(nums, index, i);
  }
  return res;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
