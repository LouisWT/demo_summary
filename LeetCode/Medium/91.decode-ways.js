/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */
/**
 * @param {string} s
 * @return {number}
 */
// 遍历字符串
// dp[i] 的第 i 项指，从 0 到 i 共 i + 1个字符，一共有多少种翻译方式
// 如果当前字符是 0，并且前一个字符是 1或2，那么这两个字符一定要一起理解，因此 dp[i] = dp[i - 2] || 1
// 如果当前字符不是0，并且前一个字符是 1 或2，那么当前字符一定可以单独理解,dp[i] = dp[i - 1]
//                  如果当前字符和前一字符还可以一起理解,那么  dp[i] += dp[i-2] || 1;
// 如果当前字符是0,并且前一字符还不是 1或2,那么肯定不能理解,返回0
// 如果当前字符不是 0, 并且前一字符不是1或2,那么二者肯定不能一起理解,因此 dp[i] = dp[i-1]
var numDecodings = function(s) {
  if (!s) return 1;
  let dp = [];
  if (s[0] === '0') return 0;
  dp[0] = 1;
  for (let i = 1; i < s.length; i++) {
    if ((s[i - 1] === '1' || s[i - 1] === '2') && s[i] === '0') {
      dp[i] = dp[i - 2] || 1;
    } else if (s[i - 1] === '1' || s[i - 1] === '2') {
      dp[i] = dp[i - 1];
      let num = Number(s[i - 1] + s[i]);
      if (num >= 1 && num <= 26) dp[i] += dp[i - 2] || 1;
    } else if (s[i] === '0') {
      return 0;
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[s.length - 1];
};

