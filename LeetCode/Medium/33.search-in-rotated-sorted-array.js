/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || nums.length === 0) return -1;
  // 判断是否旋转了
  if (nums[0] < nums[nums.length - 1]) {
    return binarySearch(nums, target, 0, nums.length - 1);
  }
  // 先要知道 target 是在前半段还是后半段
  let front = false;
  if (target >= nums[0]) front = true;
  // 如果 front 为 true，那么 target 在 0 ~ 某 index 之间
  let lo = 0;
  let hi = nums.length - 1;
  while(lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    // 当发现某个元素大于 target
    // 如果是在前面序列中，那么直接更新下标
    // 如果是在后面序列中，那么需要判断当前元素是否在后面序列，如果在，那么就更新 hi
    // 如果不在后面序列中，那就更新 lo
    if (nums[mid] > target) {
      if (front) {
        hi = mid - 1;
      } else {
        if (nums[mid] > nums[nums.length - 1]) lo = mid + 1;
        else hi = mid - 1;
      }
    } else if (nums[mid] < target) {
      if (front) {
        if (nums[mid] < nums[0]) hi = mid - 1;
        else lo = mid + 1;
      } else {
        lo = mid + 1;
      }
    } else {
      return mid;
    }
  }
  return -1;
};

function binarySearch(nums, target, lo, hi) {
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > target) {
      hi = mid - 1;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14435/Clever-idea-making-it-simple
function search(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let tmp;
    // 说明 target 在前半段, mid 也在前半段
    // 或者 target 在后半段，mid 也在后半段
    // 如果序列本身是有序的，那么这个等式成立，自动退化为二分查找
    // 一定要是大于等于，这样在第一个元素是需要的元素时，才不会出错
    if ((target >= nums[0]) === (nums[mid] >= nums[0])) {
      tmp = nums[mid];
    } else {
      tmp = target >= nums[0] ? +Infinity : -Infinity;
    }
    if (tmp > target) {
      hi = mid - 1;
    } else if (tmp < target) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

search([5, 1,3], 5)