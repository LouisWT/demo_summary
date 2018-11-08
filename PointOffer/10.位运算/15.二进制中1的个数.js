// p100

// 移位运算比除法运算(/2)效率高很多
// 缺点在于肯定会需要32次循环
function numberof1(n) {
  let count = 0;
  let flag = 1;
  // 会循环 32 次
  while(flag) {
    if (n & flag) count++;
    flag = flag << 1;
  }
  return count;
}
console.log(numberof1(9));
console.log(numberof1(-1));

// 将整数减一后 再和原来的整数进行位与运算，结果相当于将整数的二进制表示中的最右边的 1 变成 0
function newNumberof1(n) {
  let count = 0;
  while(n) {
    ++count;
    n = n & n - 1;
  }
  return count;
}
console.log(newNumberof1(9));
console.log(newNumberof1(-1));