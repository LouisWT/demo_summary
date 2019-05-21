/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */
/**
 * @param {string} s
 * @return {string}
 */
// 使用递归的方法
var decodeString = function(s) {
  if (!s) return '';
  let res = '';
  let sub = '';
  let pos = 0;
  let num = 0;
  let count = 0;
  while (pos < s.length) {
    if (count === 0 && s[pos].toUpperCase() >= 'A' && s[pos].toUpperCase() <= 'Z') {
      res += s[pos];
    } else if (count === 0 && Number(s[pos]) >= 0 && Number(s[pos]) <= 9) {
      num = num * 10 + Number(s[pos]);
    } else if (s[pos] === '[') {
      count++;
      if (count > 1) sub += '['
    } else if (s[pos] === ']') {
      count--;
      if (count === 0) break;
      sub += ']'
    } else {
      sub += s[pos];
    }
    pos++;
  }
  let tmp = decodeString(sub);
  for (let i = 0; i < num; i++) {
    res += tmp;
  }
  return res + decodeString(s.slice(pos + 1));
};

// 使用栈的方法
function decodeString(s) {
  let res = '';
  let countStack = [];
  let resStack = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] >= 0 && s[i] <= 9) {
      let count = 0;
      while (s[i] >= 0 && s[i] <= 9) {
        count = count * 10 + Number(s[i]);
        i++;
      }
      countStack.push(count);
    }
    else if (s[i] === '[') {
      resStack.push(res);
      res = '';
      i++;
    }
    else if (s[i] === ']') {
      let tmp = resStack.pop();
      let times = countStack.pop();
      for (let i = 0; i < times; i++) {
        tmp += res;
      }
      res = tmp;
      i++;
    }
    else {
      res += s[i];
      i++;
    }
  }
  return res;
}

