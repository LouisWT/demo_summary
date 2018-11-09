// p124
// 实现一个函数用来匹配包含 '.' 和 '*'，的正则表达式。模式中的字符 '.' 表示任意一个字符， * 表示它前面的字符可以出现任意次(含0次)

function match(str, pattern) {
  // 特殊: '' 与 '' 是可以匹配的
  if (str == '' && pattern == '') {
    return true;
  }
  // 特殊: '' 与 '.*'是可以匹配的
  if (!str && !pattern) {
    return false;
  }
  return matchCore(str, pattern, 0, 0);
}

function matchCore(str, pattern, sIndex, pIndex) {
  // 都匹配完成了
  if (sIndex == str.length && pIndex == pattern.length) return true;
  // 模式匹配完了，但是字符串还有剩余
  if (sIndex != str.length && pIndex == pattern.length) return false;

  // 1. 模式中下一个字符是 *
  if (pattern[pIndex + 1] == '*') {
    // 2. 如果当前值是相等的，且模式下一个字符是 *
    if (pattern[pIndex] == str[sIndex] || (pattern[pIndex] == '.' && sIndex != str.length)) {
      // 三种情况
      // 3.1 当前值相匹配，字符串往后挪一个，模式向后挪两个(进行之后的匹配)
      return matchCore(str, pattern, sIndex + 1, pIndex + 2)
      // 3.2 当前值相匹配，将字符串往后挪一个，但是模式不变(试图匹配多个)
      || matchCore(str, pattern, sIndex + 1, pIndex)
      // 3.3 * 和 * 前面的字符被忽略，因为可以匹配 0个字符
      || matchCore(str, pattern, sIndex, pIndex + 2);
    } else {
      // 4. 当前值匹配不上，且模式下一个是 *，所以字符串不变，模式向后挪两个，继续匹配
      return matchCore(str, pattern, sIndex, pIndex + 2);
    }
  }

  // 5. 当前值匹配 或者 当前 pattern 是 '.' 
  if (str[sIndex] == pattern[pIndex] || (pattern[pIndex] == '.' && sIndex != str.length)) {
    // 6. 字符串和模式各往后挪一个
    return matchCore(str, pattern, sIndex + 1, pIndex + 1);
  }
  // 当前值不匹配，下一个模式字符也不是 *，false
  return false;
}

console.log(match('', ''));