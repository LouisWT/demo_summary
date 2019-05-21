/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// 记录遍历到的元素的最小值，计算之后的元素与之前最小值的查
var maxProfit = function(prices) {
  if (!prices || prices.length === 0) return 0;
  let res = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      continue;
    }
    let pro = prices[i] - min;
    if (pro > res) res = pro;
  }
  return res;
};

