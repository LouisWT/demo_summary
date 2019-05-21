/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 与 279 题非常类似
// 都是利用一个集合中的元素去拼凑一个数，并且要求用到的元素的个数最少
// 这类问题就是使用动态规划求解
// res[i] 表示 i 使用集合中的元素去拼凑，最少需要多少个数
// 设 coins[j] 是集合中的一个元素，那么 res[coins[j]] 一定为1，因为 i 恰好和 coins[j] 相等
// res[i] 的最终结果中肯定包括某个 coins[j]
// res[i] 可以表示为 min(res[i - coins[j]] + res[coins[j]])
var coinChange = function(coins, amount) {
  if (!coins || coins.length === 0) return -1;
  if (amount === 0) return 0;
  coins.sort((a, b) => a > b ? 1 : -1);
  let res = [0];
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        // res[i - coins[j]] + res[coins[j]]
        // res[conis[j]] 一定等于1，因为它与零钱的面值刚好相等
        min = Math.min(min, res[i - coins[j]] + 1);
      } else {
        break;
      }
    }
    res[i] = min;
  }
  if (res[amount] === Infinity) return -1;
  return res[amount];
};

