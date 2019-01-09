// 给定一个字符串，求它的最长回文子串的长度

// 1. 以每个字符为中心，依次求最长回文子串
// 回文子串有两种，一种是中心只有一个字符，一种是中心有两个字符，要都考虑进去
// 时间复杂度 o(n2)
function findMaxSubStr(str) {
  if (!str) return 0;
  let max = '';
  for (let i = 0; i < str.length; i++) {
    // 包含中心字符，最大的搜索范围
    let length = Math.min(i + 1, str.length - i);
    let temp = maxSub(str, i, length);
    if (temp.length > max.length) {
      max = temp;
    }
  }
  return max;
}

function maxSub(str, i, length) {
  let str1 = str[i];
  // 1.1 中心只有一个字符的最长回文
  for (let j = 1; j < length; j++) {
    if (str[i - j] == str[i + j]) {
      str1 = str[i - j] + str1 + str[i + j];
    } else {
      break;
    }
  }
  let str2 = '';
  // 1.2 中心有两个字符的最长回文
  for (let j = 0; j < length; j++) {
    if (str[i - j] == str[i + j + 1]) {
      str2 = str[i - j] + str2 + str[i + j + 1];
    } else {
      break;
    }
  }
  return str1.length > str2.length ? str1 : str2;
}

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on('line', (line) => {
//   console.log(findMaxSubStr2(line));
// })

// 2. Manacher 算法
// 2.1 将所有可能的奇数，偶数长度回文子串都转换成奇数长度: 在每个字符串中每个字符的两边都插入一个特殊符号，比如 #，
// 2.2 记录目前已知的回文串能覆盖到的最右边的地方
// 2.3 覆盖到最右的回文串所对应的回文中心也要记录
// 2.4 以每一个为中心的回文串的长度也要记录，
// 2.5 对于新的中心，判断它是否在右边界内，如果在，就计算它相对右边界回文中心的对称位置，从而得到一些信息，如果该中心需要拓展，继续拓展
function findMaxSubStr2(str) {
  if(!str) return 0;
  str = str.split('').join('#');
  // 已知信息
  let max = new Array(str.length);
  // 当前右边界的中心的索引
  let center;
  // 右边界
  let right;
  // 初始化
  max[0] = 1;
  center = 0;
  right = 0;
  let maxStr = '';
  for (let i = 1; i < str.length; i++) {
    let length = Math.min(i + 1, str.length - i);
    let temp;
    // 如果当前字符不在右边界内，直接拓展
    if (i >= right) {
      temp = maxSub2(str, i, length);
    } else {
      let position = center - (i - center)
      let start = max[position];
      // 如果在范围内，就不用再判断了
      // if (i + start - 1 < right) {
      //   max[i] = start;
      //   continue;
      // }
      temp = maxSub2(str, i, length, start);
    }
    let tempRight = i + (temp.length - 1) / 2;
    max[i] = (temp.length - 1) / 2 + 1;
    if (tempRight > right) {
      center = i;
      right = tempRight;
    }
    if (temp.length > maxStr.length) {
      maxStr = temp;
    }
  }
  maxStr = maxStr.split('#').join('')
  if (maxStr.length <= 1) {
    return str[0];
  }
  return maxStr;
}

function maxSub2(str, i, length, start) {
  let str1 = str[i];
  // 以i 为中心的最长回文子串
  start = start || 1
  for (let j = start; j < length; j++) {
    if (str[i - j] == str[i + j]) {
      str1 = str[i - j] + str1 + str[i + j];
    } else {
      break;
    }
  }
  return str1;
}

findMaxSubStr2('111111111')