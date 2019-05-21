// p294 **
// n个骰子，所有骰子朝上一面的点数之和为s，求s所有可能的值的概率

function getProbability(n) {
  if (n <= 0) return [];
  let start = n;
  let end = 6 * n;
  let length = end - start + 1;
  const sum = new Array(length);
  sum.fill(0);
  // 确定第一个骰子的值
  for (let i = 1; i <= 6; i++) {
    probability(n, 1, i, sum);
  }
  // 各个可能出现的次数，除以 6^n，就是最终的概率
  return sum;
}

function probability(n, curr, curSum, sum) {
  // 到最后一个骰子，就将当前值加1
  if (curr === n) {
    sum[curSum - n] += 1;
  }
  // 下一个骰子
  else {
    curr++;
    for(let i = 1; i <= 6; i++) {
      probability(n, curr, curSum + i, sum);
    }
  }
}

getProbability(2);