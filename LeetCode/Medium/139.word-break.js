/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, dict) {
  let dp = new Array(s.length + 1);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // 所有连续字符都截一遍，防止匹配不到长或短的单词
      if (dp[j] && contain(dict, s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length] === true;
}

function contain(dict, str) {
  for (let i = 0; i < dict.length; i++) {
    if (dict[i] === str) return true;
  }
  return false;
}