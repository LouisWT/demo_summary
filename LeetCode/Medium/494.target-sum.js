/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// TYPE: 求数组的子串数量，每个子串满足和为某个 target


// 将元素正或负，最后求和得到所需的值
// 这其实就是将数组划分为两个部分，两部分之和相减是所需的值
// 比如 [4, 4, 3, 6] 1
// 就可以划分为 3 + 6 - 4 - 4 = 1，所以 [3, 6] [4, 4] 就是划分出的两个数组，第一个数组符号为正记为 p，第二个数组符号为负记为 n
// sum(p) - sum(n) = target
// sum(p) - sum(n) + sum(p) + sum(n) = target + sum(p) + sum(n)
// 2 * sum(p) = target + sum(arr)
// sum(p) = (target + sum(arr)) / 2
// 这个公式就可以将整个问题转化为，求满足和为 (target + sum(arr)) / 2 的子串的数量
// 注意，从第二个公式可以看出，target + sum(arr) 一定为偶数（因为 sum(p) 一定是整数）

// 求和为 target 的子串的数量的思想与 题目 416 的思想一致
var findTargetSumWays = function(nums, S) {
  if (!nums || nums.length === 0) return 0;
  S = Math.abs(S);
  let sum = nums.reduce((a, b) => a+ b, 0);
  let target = S + sum;
  if (target % 2 === 1 || S > sum) return 0;
  target = target / 2;
  let dp = new Array(target + 1);
  dp.fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      // 如果 j > nums[i], 如果 dp[j - nums[i]] 为 true（可以用 nums[i]之前的数字表示 j - nums[i]），那么 dp[j] 也为 true
      // 当 j === nums[i]
      // 那么 dp[j] = true，表示可以用 nums 中的元素表示 j
      // 这里让 j 从 target 递减到 nums[i]，是为了防止重复使用 nums[i]
      // 比如 target 是20，而 nums[i] 是 10
      // 如果 j 从 nums[i] 递增到 20，那么首先会将 dp[10] 设置为 true
      // 当 j 递增到 20 时，j - nums[i] 又等于 10，会将 dp[20] 设置为true，但是这时其实是重复利用了同一个 10
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
};

// findTargetSumWays([9,7,0,3,9,8,6,5,7,6], 2);

