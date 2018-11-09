// p 117
// 从 1 打印，一直到最大的 n 位数
// 这道题考察对边界条件的理解

// 对足够大的数很有可能超出数的范围导致溢出

// n位 0~9全排列，输出时忽略开始的0
function print1toNDigits(n) {
  // n 小于等于0 没有意义
  if (n <= 0) {
    return;
  }
  const number = new Array(n);
  for(let i = 0; i < 10; i++) {
    number[0] = i.toString();
    printToMax(number, n, 0);
  }
}

function printToMax(number, length, index) {
  if (index === length - 1) {
    printNumber(number);
    return;
  }
  for (let i = 0; i < 10; i++) {
    number[index + 1] = i.toString();
    printToMax(number, length, index + 1);
  }
}

function printNumber(number) {
  let index = 0;
  while(number[index] == 0) { index++; }
  if (index >= number.length) return;
  console.log(number.slice(index).join(''));
}

print1toNDigits(10);