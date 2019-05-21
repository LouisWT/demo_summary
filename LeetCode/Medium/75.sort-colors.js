/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 三色排序问题
// begin end 两个指针，初始为 -1 和 length
// begin 指向的是目前找到的所有 0 的最后位置
// end 指向的是目前找到的所有 2 的最前位置
// curr 指针表示当前遍历的元素
// 如果 nums[curr] 为 0，那么将 ++begin 的元素和 curr 的元素交换，然后 curr++
// 如果 nums[curr] 为 1，那么 curr++
// 如果 nums[curr] 为 2，那么将 --end 的元素和 curr 的元素交换
var sortColors = function(nums) {
  if (!nums || nums.length === 0) return;
  let begin = -1;
  let end = nums.length;
  let curr = 0;
  while (curr < end) {
    if (nums[curr] === 0) {
      swap(nums, begin + 1, curr);
      begin++;
      curr++;
    } else if (nums[curr] === 1) {
      curr++;
    } else {
      swap(nums, end - 1, curr);
      end--;
    }
  }
  return;
};

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
