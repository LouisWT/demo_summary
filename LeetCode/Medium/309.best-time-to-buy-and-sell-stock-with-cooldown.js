/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
// 对第 i 个价格，dp[i][0]表示在这里卖出的最大利润
// dp[i][1] 表示在这里 cooldown 的最大利润
// 卖出的最大利润是在i的价格减去之前位置j的价格加上 j - 1 的位置 cooldown 的最大利润
// dp[i][0] = max(prices[i] - prices[j] + dp[j - 1][1]) (0 <= j < i)
// 当前位置 cooldown 有两种可能，一种是前一位置卖出，这里强制cooldown，另一种是当前位置就是想啥也不干
// dp[i][1] = max(dp[i - 1][0], dp[i - 1][1])
var maxProfit = function(prices) {
  if (!prices || prices.length === 0) return 0;
  let dp = new Array(prices.length);
  dp[0] = [0, 0];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [];
    // -prices[j] + prev 的结果可以用数组保存下来防止重复计算
    let max = 0;
    for (let j = 0; j < i; j++) {
      let prev = j >= 1 ? dp[j - 1][1] : 0;
      let ben = prices[i] - prices[j] + prev;
      if (ben > max) max = ben;
    }
    dp[i][0] = max;
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1]);
  }
  return Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1]);
};

// 2. 这个方法和上面的方法思想没有区别，但是对上一个方法的循环进行了优化，加快了速度
var maxProfit = function(prices) {
  if (!prices || prices.length === 0) return 0;
  let dp = new Array(prices.length);
  dp[0] = [0, 0, -prices[0]];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [];
    dp[i][0] = prices[i] + dp[i - 1][2];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][2] = Math.max(-prices[i] + dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1]);
};


