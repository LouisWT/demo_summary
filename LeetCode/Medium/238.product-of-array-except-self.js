/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 比如对 [a[0], a[1], a[2], a[3]] 四个数
// 输出数组的每一项分别是
// | a[1] * a[2] * a[3]
// -----
// a[0] |* a[2] * a[3]
//      -------
// a[0] * a[1] |* a[3]
//             -------
// a[0] * a[1] * a[2] |

// 可以看出这个其实可以用前后的错位相乘来解决
// 从左到右得出的是  1 a[0] a[0]*a[1] a[0]*a[1]*a[2]
// 从右到左得到的是  1 a[3] a[3]*a[2] a[3]*a[2]*a[1]
// 最后相乘就行了
var productExceptSelf = function(nums) {
  if (!nums || nums.length === 0) return;
  let res = [];
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};

