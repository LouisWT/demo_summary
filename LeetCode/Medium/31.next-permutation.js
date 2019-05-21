/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 从后向前比较相邻的两个元素，如果出现了后面元素大于前面元素的情况，说明只要把这个比较小的前面元素换到后面，那么就能得到字典序的下一个数
// 前面元素要与它后面序列中比它的的元素中，最小的元素互换，这样能保证最高位增加的最小
// 这时后面的序列是单调递减的，将后面的序列反转，变为单调递增，这样就得到了结果
var nextPermutation = function(nums) {
  if (!nums || nums.length <= 1) return nums;
  // 从尾到头找第一个出现后一个比前一个大的情况
  let curr = nums.length - 1;
  let prev = nums.length - 2;
  while (prev > 0 && nums[curr] <= nums[prev]) {
    curr--;
    prev--;
  }
  // 如果当前是最大的排列，所以直接 reverse，变成最小的情况
  if (prev == 0 && nums[1] <= nums[0]) return nums.reverse();
  // 不能直接交换大的和小的，考虑 [1, 3, 2] 的情况，应当是 后面 序列中，比nums[prev] 大的最小值和它换
  let min = search(nums, prev, curr);
  // 如果是 [1, 5, 1, 1] 这种情况，那么 minGreater和 prev换了之后跟没换一样
  if (nums[prev] < nums[min]) swap(nums, prev, min);
  else swap(nums, prev, curr);
  // 将 curr ~ length - 1 的元素全部 reverse
  let lo = curr;
  let hi = nums.length - 1;
  while (lo < hi) {
    swap(nums, lo, hi);
    lo++;
    hi--;
  }
  return nums;
};

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
// 在 j ~ length - 1 的递减序列中找一个比 nums[i] 大的最小值，
function search(arr, i, j) {
  if (j === arr.length - 1) return j;
  let lo = j;
  let hi = arr.length - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > arr[i]) {
      lo = mid + 1;
    } else {
      break;
    }
  }
  if (arr[lo] <= arr[i]) lo--;
  // 继续找
  while (lo < arr.length - 1 && arr[lo + 1] > arr[i]) {
    lo++;
  }
  return lo;
}
