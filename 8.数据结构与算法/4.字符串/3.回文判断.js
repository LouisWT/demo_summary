// 判断一个字符串是否是回文字符串

function strLoop(str) {
  if (!str) return true;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(strLoop('ABCBA'))
console.log(strLoop('ABC2A'))