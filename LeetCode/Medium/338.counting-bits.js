/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */
/**
 * @param {number} num
 * @return {number[]}
 */
// 比如从 0 到 12
// 0000
// 0001

// 0010
// 0011

// 0100
// 0101
// 0110
// 0111

// 1000
// 1001
// 1010
// 1011
// 1100
// 可以看到
// 2 ~ 3 时，除了多了最高位，低位与 0~1的表示是一样的
// 4 ~ 7 时，除了多了最高位，低位与 0~3的表示是一样的
// 8 ~ 15 时，除了多了最高为，低位与 0~7的表示是一样的
// 所以说我们需要记住一个 step,表示什么时候变化
// step 分别是 2 4 8 ... 2*n,因此只要到二的倍数,我们变化一下step
// res[i] = res[i - step] + 1 的等式就一直适用
var countBits = function(num) {
  if (num === 0) return [0];
  let res = [0, 1];
  let step = 2;
  for (let i = 2; i <= num; i++) {
    if (i === step*2) step = step * 2;
    res[i] = res[i - step] + 1;
  }
  return res;
};

