/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 使用 map 来记录每个元素出现的次数
// 然后取出键和值
// 最后根据出现次数对结果进行排序
var topKFrequent = function(nums, k) {
  if (!nums || nums.length === 0 || k === 0) return [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]);
    map.set(nums[i], (count || 0) + 1);
  }
  // 取出 map 对应的键
  // 取出 map 对应的值
  let res = [...map.keys()];
  let count = [...map.values()];
  // 选出前 k 个数
  sort(res, count, 0, res.length - 1, k);
  res = res.slice(0, k);
  return res;
};

function sort(res, count, lo, hi, k) {
  if (lo >= hi) return;
  let j = partition(res, count, lo, hi);
  if (j > k - 1) {
    sort(res, count, lo, j - 1, k);
  } else if (j < k - 1) {
    sort(res, count, j + 1, hi, k);
  }
}
function partition(res, count, lo, hi) {
  let i = lo;
  let j = hi + 1;
  let val = count[lo];
  while (true) {
    while (count[++i] >= val) { if (i === hi) break; }
    while (count[--j] <= val) { if (j === lo) break; }
    if (i >= j) break;
    swap(res, i, j);
    swap(count, i, j);
  }
  swap(res, lo, j);
  swap(count, lo, j);
  return j;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
