/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 *
 * https://leetcode.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (37.72%)
 * Total Accepted:    150.3K
 * Total Submissions: 398.4K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * Given an array nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k
 * numbers in the window. Each time the sliding window moves right by one
 * position. Return the max sliding window.
 * 
 * Example:
 * 
 * 
 * Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 * Output: [3,3,5,5,6,7] 
 * Explanation: 
 * 
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty
 * array.
 * 
 * Follow up:
 * Could you solve it in linear time?
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 关键在于用一个队列来保存当前窗口的最大值和最大值的位置，并且保证队列是递减的
// 来一个新的值，首先看它的下标与队列头的下标的差是否大于等于 窗口大小，如果是的，那么应当队列头已经滑出窗口，应当去掉了
// 然后看新的值,是否比它前面的值大,如果大的话,那么就将前面的值去掉,直到队列递减
// 最后队列头的值就是当前位置的滑动窗口的最大值
var maxSlidingWindow = function(nums, k) {
  if (!nums || nums.length === 0 || k < 1) return [];
  if (k === 1) return nums;
  // 结果
  let res = [];
  // 保存最大值和最大值位置的队列
  let quene = [{index: 0, value: nums[0]}];
  // 当前遍历的元素的下标，由于quene 初始化有一个元素，所以 pos 从 1 开始
  let pos = 1;
  while (pos < k) {
    // 如果新元素的值大于前面的值，那么将前面的值 pop 出去，保证队列递减
    while (quene.length > 0 && nums[pos] > quene[quene.length - 1].value) {
      quene.pop();
    }
    quene.push({index: pos, value: nums[pos]});
    pos++;
  }
  res.push(quene[0].value);
  while (pos < nums.length) {
    // 新的值和队列最前面的值，下标差距大于等于 k，说明第一个值已经除了滑动窗口了
    if (pos - quene[0].index >= k) {
      quene.shift();
    }
    while (quene.length > 0 && nums[pos] > quene[quene.length - 1].value) {
      quene.pop();
    }
    quene.push({index: pos, value: nums[pos]});
    res.push(quene[0].value);
    pos++;
  }
  return res;
};
