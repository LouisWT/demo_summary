/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (k === 0) return [];
  let res = [];
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  getCombine(arr, 0, k, [], res);
  return res;
};

function getCombine(arr, index, k, tmp, res) {
  if (index > arr.length) return;
  if (tmp.length === k) {
    res.push([...tmp]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    tmp.push(arr[i]);
    getCombine(arr, i + 1, k, tmp, res);
    tmp.pop();
  }
}
