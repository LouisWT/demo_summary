// p225
// 数字以 012345678910111213... 的格式序列化到一个字符序列中，第5位(从0开始计数)是5，第13位是 1，等等
// 求第 n 位对应的数字

function calN(N) {
  if (N < 0) return -1;
  let sum = N;
  let start = 0;
  let end = 9;
  let count = 1;
  while(true) {
    const num = end - start + 1;
    sum = sum - count * num;
    // 如果大于 0 说明还在下一个区间
    if (sum > 0) {
      start = end + 1;
      count += 1;
      end += 9 * Math.pow(10, count - 1);
    }
    // 如果刚好等于0，说明正好是 1
    if (sum == 0) {
      return 1;
    }
    // 如果小于0，说明在当前区间
    if (sum < 0) {
      sum = sum + count * num;
      break;
    }
  }
  // 目标字母在数字的第几位
  let numIndex = sum % count;
  // 是区间的第几个数字
  const index = (sum - numIndex) / count;
  let target = (index + start).toString().split('')[numIndex];
  return parseInt(target);
}

let a = calN(5);
a = calN(13);
a = calN(19);
a = calN(1001);

