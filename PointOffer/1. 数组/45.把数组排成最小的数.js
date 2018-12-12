// p227
// 输入一个正整数数组，把数组所有数字拼接起来排成一个数，打印能拼接处的所有数字中最小的一个

function findMin(arr) {
  if (!arr) return;
  if (arr.length === 0) { return []; }
  arr.sort((a, b) => {
    let num1 = a.toString() + b.toString();
    let num2 = b.toString() + a.toString();
    if (compare(num1, num2)) {
      return 1;
    } else {
      return -1;
    }
  });
  return parseInt(arr.join(''));
}

function compare(a, b) {
  for(let i = 0; i < a.length; i++) {
    if (parseInt(a[i]) > parseInt(b[i])) { return true; }
    if (parseInt(a[i]) < parseInt(b[i])) { return false; }
    if (parseInt(a[i]) == parseInt(b[i])) { continue; }
  }
}

console.log(findMin([3, 32, 321]));
