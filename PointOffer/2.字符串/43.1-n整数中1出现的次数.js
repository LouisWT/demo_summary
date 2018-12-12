// p221
// 输入一个整数 n, 求 1~n 这n 个整数中的十进制表示中 1 出现的次数，输入 12 ， 1 ~ 12 整数中 1 10 11 12 ，共 5个 1

function count1OfN(N) {
  if (N <= 0) return 0;
  if (!N) return 0;
  const str = N.toString();
  return count1(str.split(''));
}

function count1(arr) {
  const temp = [...arr];
  // 将一个数字分为最高位，和除最高位以外两个区间
  // top 就是最高位
  const top = temp.splice(0, 1);
  let sum = 0;
  // 最高位是 1 的所有情况
  if (top[0] === '0') {
    if (temp.length == 0) {
      return 0;
    }
  }
  else if (top[0] === '1') {
    if (temp.length == 0) {
      return 1;
    }
    // 不加 '' 默认使用 , 来连接数组元素
    sum += parseInt(temp.join('')) + 1;
  }
  else {
    if (temp.length == 0) {
      return 1;
    }
    sum += Math.pow(10, temp.length);
  }
  // 最高位存在时，剩下位是 1 的情况
  sum += top[0] * temp.length * Math.pow(10, temp.length - 1)
  // 除去最高位后 1 出现的次数
  if (temp.length >= 1) {
    sum += count1(temp);
  }
  return sum;
}

// console.log(count1OfN(1));
// console.log(count1OfN(10));
// console.log(count1OfN(12));
// console.log(count1OfN(55));
// console.log(count1OfN(10000));
console.log(count1OfN(21345));