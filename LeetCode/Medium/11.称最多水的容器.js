/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (43.74%)
 * Total Accepted:    348.8K
 * Total Submissions: 797.5K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * 
 * 
 * 
 * 
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49. 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 前面那条边的位置索引
  let i = 0;
  // 后面那条边的位置索引
  let j = height.length - 1;
  // 最大面积
  let res = 0;
  while (i < j) {
    let front = height[i];
    let back = height[j];
    let tmp = (j - i) * Math.min(front, back);
    if (tmp > res) {
      res = tmp;
    }
    if (front > back) j--;
    else i++;
  }
  return res;
};

