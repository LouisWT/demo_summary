// p 236 
// 从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度，只包含 a~z
// 如 "arabcacfr"中，最长的不含重复字符的子字符串是 acfr，长度为4


function findNoDupStrLen(str) {
  if (!str) return 0;
  let maxLength = new Array(str.length);
  let max = 0;
  // 每个字符上次出现的位置
  let positions = new Array(26);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = -1;
  }
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      max = 1;
      maxLength[0] = 1;
      // 97 是 'a' 的 asc码
      positions[str[0].charCodeAt() - 97] = 0;
      continue;
    }
    // 上一个相同数字出现的位置
    const lastPos = positions[str[i].charCodeAt() - 97];
    // 如果没有上一个相同数字
    if (lastPos == -1) {
      max += 1;
      maxLength[i] = max;
    } else {
      // 如果上次出现的位置小于前一个
      if (i - lastPos <= maxLength[i - 1]) {
        maxLength[i] = i - lastPos;
        max = i - lastPos;
      } else {
        max += 1;
        maxLength[i] = max;
      }
    }
    // 记录这个字符出现的位置
    positions[str[i].charCodeAt() - 97] = i;
  }
  let temp = 0;
  for (let i = 0; i < maxLength.length; i++) {
    if (temp < maxLength[i]) {
      temp = maxLength[i];
    }
  }
  return temp;
}

console.log(findNoDupStrLen('arabcacfr'))