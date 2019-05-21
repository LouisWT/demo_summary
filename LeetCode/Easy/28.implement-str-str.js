/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 因为不想用蛮力，所以使用了字符串匹配的 sunday 算法
// https://blog.csdn.net/q547550831/article/details/51860017
// 主要思想就是模式串在被匹配串上移动，看是否匹配
// 比较的时候将模式串的头与匹配串的第 i 位对齐，然后一位一位的比较
// 当不匹配的时候，取得匹配串中第 i + 匹配长度 位置的字符（第一个超出模式串比较范围的字符）
// 如果这个字符出现在模式串中，那么模式串移动的距离是这个字符距离模式串末尾的距离
// 如果这个字符没出现在模式串中，那么模式串移动的距离是模式串的长度 + 1
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  if (!haystack || haystack.length < needle.length) return -1;
  // 模式串中每个字符离末尾的距离
  // 比如 abc，map就是 {a: 3, b: 2, c: 1 }
  let map = new Map();
  for (let i = needle.length - 1; i >= 0; i--) {
    if (!map.has(needle[i])) map.set(needle[i], needle.length - i);
  }
  // 模式串在匹配串中开始匹配的位置
  let i = 0;
  while (i <= (haystack.length - needle.length)) {
    // 模式串匹配的位置
    let j = 0;
    while (haystack[i + j] === needle[j]) {
      j++;
      if (j >= needle.length) return i;
    }
    // 如果没匹配上，看模式串末端之后的字符是否出现在模式串中
    // 如果出现了，就移对应的长度，让匹配的字符对齐
    // 如果没出现，就移动整个模式串的长度 + 1 的距离，加 1 是因为末尾的字符既然没出现在模式串中，那么肯定不会与模式串的第一个字符匹配
    i += map.get(haystack[i + needle.length]) || (needle.length + 1);
  }
  return -1;
};

