// 1. 首先插入特殊字符，让最后结果的回文子串都是奇数长度的字符串
// 2. 然后遍历字符串，从当前字符串向两边延伸，计算最长子串
// 3. 如果当前字符为中心的最长子串长度大于之前的最长子串，那么就替换之前的最长子串
// 4. 继续遍历
function longestPalindrome(s) {
  if (!s) return '';
  s = s.split('').join('#');
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let j = i - 1;
    let k = i + 1;
    let tmp = s[i];
    while (j >= 0 && (k <= s.length - 1)) {
      if (s[j] === s[k]) {
        tmp = s[j] + tmp + s[k];
        j--;
        k++;
      } else {
        break;
      }
    }
    // 这里要先替换，否则 #b# 和 b#b 这两种情况下，不能做出正确的选择
    tmp = tmp.replace(/#/g, '');
    if (tmp.length > res.length) {
      res = tmp;
    }
  }
  return res;
}

// 关键在于记住
// 1. 每个字符能延伸的最大长度
// 2. 当前到达的最远位置
// 3. 最远位置对应的回文中心
// 一个新字符：如果它大于最远位置，那么之前没有它的信息，所以从它为中心开始计算，并且最终更新回文中心和最远距离
// 一个新字符：如果它的位置小于最远位置，所以之前有它的信息，找到它的对应位置的 count
//              如果新字符的位置 + count 小于最远距离，那么现在的count 已经是它的最远距离了，把它的count 记录下来，开始下个循环
//              如果新字符的位置 + count 大于等于最远距离，那么就将 count 置为最远距离 - 当前位置的字符数，并从这里开始比较
function longestPalindrome(s) {
  if (!s) return '';
  s = s.split('').join('#');
  // 目前最远回文子串的中心
  let maxMid = 0;
  // 目前到达的最远位置
  let maxPos = 0;
  // 当前位置
  let pos = 0;
  // 以每个字符为中心向两边延伸的最远距离
  let countArr = [];
  let res = '';
  while (pos < s.length) {
    // 根据 maxMid 和 maxPos 计算是否有自己位置的可用信息
    // 如果 pos 大于 maxMid 并且 pos在 maxPos 范围内
    // 那么它的 count 有可能等于它对称位置的 count
    // 如果 pos + count < maxPos 那么，说明没戏
    // 如果 pos + count >= maxMid + maxPos 那么，正好从 maxMid + maxPos - pos 个元素开始比较
    let count = 0;
    let tmpRes = s[pos];
    if (pos > maxMid && pos <= maxPos) {
      count = countArr[maxMid - pos + maxMid];
      if (pos + count < maxPos) {
        countArr[pos] = count;
        pos++;
        continue;
      } else {
        count = maxPos - pos;
        let tmp = 1;
        while (tmp <= count) {
          tmpRes = s[pos + tmp] + tmpRes + s[pos + tmp];
          tmp++;
        }
      }
    }
    let j = pos - count - 1;
    let k = pos + count + 1;
    while (j >= 0 && k < s.length) {
      if (s[j] === s[k]) {
        count++;
        tmpRes = s[j] + tmpRes + s[k];
        j--;
        k++;
      } else {
        break;
      }
    }
    if (pos + count > maxPos) {
      maxPos = pos + count;
      maxMid = pos;
    }
    tmpRes = tmpRes.replace(/#/g, '');
    if (tmpRes.length > res.length) res = tmpRes;
    countArr[pos] = count;
    pos++;
  }
  return res;
}