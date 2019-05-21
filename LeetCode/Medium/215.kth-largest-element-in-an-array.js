/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (!nums || nums.length === 0) return;
  return sort(nums, 0, nums.length - 1, k);
};

function sort(nums, lo, hi, k) {
  if (lo >= hi) return nums[lo];
  let j = partition(nums, lo, hi);
  // 第k个数在位置上就是 k-1 的位置
  if (j > (k - 1)) {
    return sort(nums, lo, j - 1, k);
  } else if (j < (k - 1)) {
    return sort(nums, j + 1, hi, k);
  } else {
    return nums[j];
  }
}

function partition(nums, lo, hi) {
  let i = lo;
  let j = hi + 1;
  let val = nums[lo];
  while (true) {
    while (nums[++i] >= val) { if (i === hi) break;}
    while (nums[--j] <= val) { if (j === lo) break;}
    if (i >= j) break;
    swap(nums, i, j);
  }
  swap(nums, lo, j);
  return j;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

