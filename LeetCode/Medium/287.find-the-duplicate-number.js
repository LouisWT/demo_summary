/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 这个问题可以抽象为找到链表中环的位置
// 数组中有 n + 1 个值，并且值是 1 ~ n 之间的，那么每个值其实也可以对应到一个下标
// 比如数组 [1, 3, 4, 2, 2]
// 位置 -> 数字
// 0 -> 1
// 1 -> 3
// 3 -> 2
// 2 -> 4
// 4 -> 2
// 2 -> 4
// ....
// 可见这里已经出现环了
// 将上面的形式用链表表示是这样的
//                 -----
//                |    |
// 0 -> 1 -> 3 -> 2 -> 4
// 可见它就是找到链表中环位置的相同问题，思想基本与 142 号问题一致
var findDuplicate = function(nums) {
  if (!nums || nums.length === 0) return -1;
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
