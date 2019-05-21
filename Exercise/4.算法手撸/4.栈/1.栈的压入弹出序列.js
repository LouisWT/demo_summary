// 判断栈的压入弹出序列是否是对应得
function judge(str1, str2) {
  // 如果有空字符串或者长度不一样，直接返回错误
  if (!str1 || !str2) return false;
  if (str1.length !== str2.length) return false;
  let stack = [];
  for (let i = 0; i < str2.length; i++) {
    let index = str1.indexOf(str2[i]);
    if (index === -1) {
      if (stack[stack.length - 1] === str2[i]) {
        stack.pop();
        continue;
      } else {
        return false;
      }
    }
    for (let j = 0; j < index; j++) {
      stack.push(str1[j]);
    }
    str1 = str1.slice(index + 1);
  }
  return true;
}

console.log(judge('12345', '45321'));
console.log(judge('12345', '43512'));