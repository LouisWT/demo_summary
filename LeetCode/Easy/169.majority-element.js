/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 使用分治的思想，找到排序后中间的元素
var majorityElement = function(nums) {
  if (!nums || nums.length === 0) return;
  let k = Math.floor(nums.length / 2);
  sort(nums, k, 0, nums.length - 1);
  return nums[k];
};

function sort(nums, k, lo, hi) {
  if (lo >= hi) return;
  let j = partition(nums, lo, hi);
  if (j > k) {
    sort(nums, k, lo, j - 1);
  } else if (j < k) {
    sort(nums, k, j + 1, hi);
  } else {
    return;
  }
}

function partition(nums, lo, hi) {
  let i = lo;
  let j = hi + 1;
  let val = nums[lo];
  while(true) {
    while (nums[++i] <= val) { if(i === hi) break; }
    while (nums[--j] >= val) { if(j === lo) break; }
    if(i >= j) break;
    swap(nums, i, j);
  }
  swap(nums, lo, j);
  return j;
}

function swap(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

// 2. 单纯遍历，由于目标元素个数是超过数组长度一半的，因此将不同的元素抵消，这样剩到最后的一定是目标元素
function majorityElement(nums) {
  let res = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (res === nums[i]) {
      count++;
    } else if (count === 0){
      res = nums[i];
      count++;
    } else {
      count--;
    }
  }
  return res;
}
