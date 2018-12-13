// p240 **
// 把只包含因子2 3 5的数称为丑数，求从小到大的第 1500 个丑数，如 6 8 都是丑数，但是 14不是
// 1 习惯上是第一个丑数

function findUgly(N) {
  if (N <= 0) { return; }
  const ugly = [1];
  let index = 1;
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  while (index < N) {
    ugly[index] = Math.min(ugly[p2] * 2,ugly[p3] * 3, ugly[p5] * 5);
    // 关键是下面这三个 while
    // 在 p2 索引之前的数字乘以2 得到的结果都小于等于当前最大的数
    // 在 p2 索引乘以2后大于当前最大的数
    while(ugly[p2] * 2 <= ugly[index]) {
      ++p2;
    }
    // 在 p3 索引之前的数字乘以3 得到的结果都小于等于当前最大的数
    // 在 p3 索引乘以3后大于当前最大的数
    while(ugly[p3] * 3 <= ugly[index]) {
      ++p3;
    }
    // 在 p5 索引之前的数字乘以5 得到的结果都小于等于当前最大的数
    // 在 p5 索引乘以5后大于当前最大的数
    while(ugly[p5] * 5 <= ugly[index]) {
      ++p5;
    }
    ++index;
  }
  return ugly[index - 1];
}


findUgly(1500);
