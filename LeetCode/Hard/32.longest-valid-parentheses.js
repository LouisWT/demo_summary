/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */
/**
 * @param {string} s
 * @return {number}
 */
// 每次用栈记住 ( 出现的位置
// 栈默认有元素 -1
// 当字符是 (，那就将当前元素的位置入栈
// 当字符是 )，那么首先将栈顶元素出栈，表示匹配了
//    然后看栈是否为空，如果为空，说明 ) 的次数多于 (，那么从这里作为一个新起点，将这个位置入栈
//    如果栈不为空，那么当前位置减去栈顶元素就得到了最长的合法子串长度
var longestValidParentheses = function(s) {
  if (!s) return 0;
  let stack = [-1];
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) stack.push(i);
      else ans = Math.max(ans, i - stack[stack.length - 1]);
    }
  }
  return ans;
}

// dp[i] 表示以字符 i 为结尾的字符串正确括号对的最大长度
// s[i] 是 (，那么 dp[i] 是 0，因为 ( 结尾的字符串不可能正确
// s[i] 是 )，如果 s[i-1]是 (，那么 dp[i] = dp[i - 2] 或者 2;
//            如果 s[i-1]是 )，那么要找到前面字符串中还没匹配到的 (，这个位置就是 i - 1 - dp[i-1]
//                            dp[i] = dp[i-1] + dp[i - 2 - dp[i-1]] + 2;
function longestValidParentheses(s) {
  if (!s) return 0;
  let max = 0;
  let dp = new Array(s.length);
  dp.fill(0);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i-1] === '(') {
        dp[i] = (i - 2) >= 0 ? (dp[i - 2] + 2) : 2;
        max = Math.max(dp[i], max);
      } else if (i - 1 - dp[i - 1] >= 0 && s[i - 1 - dp[i - 1]] === '(') {
        dp[i] = dp[i - 1] + ((i - dp[i - 1] - 2 >= 0) ? dp[i - dp[i - 1] - 2] : 0) + 2
        max = Math.max(dp[i], max);
      }
    }
  }
  return max;
}
