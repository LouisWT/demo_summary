/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 我的思路是改用 Set 来保存，并且最后存储的是字符串，这样如果重复元素导致的重复，就直接用 Set 去掉
// 这样还是会导致一些重复的计算
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a, b) => a > b ? 1 : -1);
  let res = new Set();
  calc(candidates, target, [], res, 0);
  res = [...res].map((v) => { return v.split('#') })
  return res;
};

function calc(nums, target, tmp, res, index) {
  for (let i = index; i < nums.length; i++) {
    if (nums[i] > target) return;
    if (nums[i] === target) return res.add([...tmp, nums[i]].join('#'));
    tmp.push(nums[i]);
    calc(nums, target - nums[i], tmp, res, i + 1);
    tmp.pop();
  }
}

// 答案和我的思路差不多，但是把我没想清楚的点解决掉了
// 每次循环 i 都是从 index 开始
// 如果 i === index，那么它就是第一个，不用考虑它的答案会和别人重复
// 如果 i > index，那么它是后面的，它如果和前面的元素相同，那么前面的行，它也行，前面的不行，它也不行，所以跳过
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a, b) => a > b ? 1 : -1);
  let res = [];
  calc(candidates, target, [], res, 0);
  return res;
};

function calc(arr, target, tmp, res, index) {
  for (let i = index; i < arr.length; i++) {
    // 关键就是这句，去除了重复字符的影响
    if (i > index && arr[i] == arr[i - 1]) continue;
    if (arr[i] > target) return;
    if (arr[i] === target) return res.push([...tmp, arr[i]])
    tmp.push(arr[i]);
    calc(arr, target - arr[i], tmp, res, i + 1);
    tmp.pop();
  }
}
