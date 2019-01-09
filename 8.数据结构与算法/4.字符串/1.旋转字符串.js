// 1. 给定一个字符串，把字符串前面若干个字符移动到字符串的尾部，如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，使得原字符串变成字符串“cdefab”。长度为 n 的字符串的时间复杂度是 o(n), 空间复杂度 o(1)

// 1.1 暴力移位
function shiftStr(str, n) {
  if (n < 0) {
    n = 0
  }
  if (n > str.length) {
    n = str.length;
  }
  let str1 = str.slice(0, n);
  let str2 = str.slice(n, str.length);
  return str2 + str1;
}

console.log(shiftStr('abcdef', 1));

// 1.2 三步反转法
// 将字符串分为两个部分
// 将每个部分分别反转
// 将整体再次反转
// 得到的就是旋转后的字符串
function shiftStr2(str, n) {
  if (n < 0) {
    n = 0
  }
  if (n > str.length) {
    n = str.length;
  }
  let arr = str.split('');
  reverse(arr, 0, n - 1);
  reverse(arr, n, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr.join('');
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(shiftStr2('abcdef', 2));