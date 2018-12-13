// p283
// 和为s 的连续正整数序列(至少含有两个数)

function findSLink(s) {
  if (s < 3) return [];
  const end = Math.ceil(s / 2);
  let start = 1;
  let next = 2;
  let result = [];
  while(next <= end) {
    // 使用等差数列求和公式
    const temp = (start + next) * (next - start + 1) / 2 ;
    // 如果等于目标值
    if (temp == s) {
      let path = [];
      for (let i = start; i <= next; i++) {
        path.push(i);
      }
      result.push(path);
      next += 1;
      start += 1;
    }
    // 如果大于目标值
    else if (temp > s) {
      // 首先挪开始的数字
      if (start < next) {
        start += 1;
      }
      // 否则往后挪
      else {
        start = next;
        next += 1;
      }
    }
    // 小于目标值，往后挪
    else {
      next += 1;
    }
  }
  return result;
}

console.log(findSLink(15));