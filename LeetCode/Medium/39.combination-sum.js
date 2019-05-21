/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates = candidates.sort((a, b) => a > b ? 1 : -1);
  let res = [];
  calc(candidates, target, [], res, 0);
  return res;
};

function calc(arr, target, tmp, res, index) {
  for (let i = index; i < arr.length; i++) {
    if (arr[i] > target) return;
    if (arr[i] === target) return res.push([...tmp, arr[i]])
    tmp.push(arr[i]);
    // 从当前元素继续往下找，这样结果就都是递增的，去除了重复情况
    calc(arr, target - arr[i], tmp, res, i);
    tmp.pop();
  }
}

