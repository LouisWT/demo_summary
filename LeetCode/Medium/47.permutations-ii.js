/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 试想一个 1 2 3 1 的例子
// 1 + (2 3 1) 的组合
// 2 + (1 3 1) 的组合
// 3 + (2 1 1) 的组合
// 1 + (2 3 1) 的组合
// 可见最后一个是多余的,所以可以通过一个 set 记录当前出现过的元素,如果这个元素出现过,那么直接跳过
var permuteUnique = function(nums) {
  if (!nums || nums.length == 0) return [];
  let res = [];
  calc(nums, 0, res);
  return res;
};

function calc(nums, index, res) {
  if (index === nums.length) return res.push([...nums]);
  let set = new Set();
  for (let i = index; i < nums.length; i++) {
    if (set.has(nums[i])) continue;
    set.add(nums[i]);
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
