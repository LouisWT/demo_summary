// p300
// 0~n-1 n个数字排成圆圈，从0开始，每次从这个圆圈里删除第 m 个数字，求最后剩下的数字

function deleteM(n, m) {
  if (n < 0 || m <= 0) return -1;
  let temp = [];
  for(let i = 0; i < n; i++) {
    temp.push(i);
  }
  let length = n;
  let index = 0;
  while(length > 1) {
    let count = 1;
    while (count < m) {
      count++;
      index++;
      if (index == length) {
        index = 0;
      }
    }
    temp.splice(index, 1);
    // 如果删除的恰好是最后一个数字，那么把index挪到第一个
    if (index == length - 1) {
      index = 0;
    }
    length--;
  }
  return temp[0];
}

console.log(deleteM(5, 3));