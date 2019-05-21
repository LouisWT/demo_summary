/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s || words.length <= 0) return [];
  let res = [];
  let wm = new Map();
  for (let i = 0; i < words.length; i++) {
    let val = wm.get(words[i]) || 0;
    wm.set(words[i], val + 1);
  }
  let wl = words[0].length;
  for (let i = 0; i < wl; i++) {
    // 保存了多少个单词，如果等于 words.length 说明正好
    let left = i;
    let num = 0;
    let map = new Map();
    for (let j = i; j <= s.length - wl; j += wl) {
      let str = s.slice(j, j + wl);
      if (wm.has(str)) {
        let val = map.get(str) || 0;
        map.set(str, val + 1);
        num++;
        // 如果超出次数了，就从左边开始去掉单词，直到不超出次数
        // 这样比直接将 map 清除效率更好
        while (map.get(str) > wm.get(str)) {
          let str1 = s.slice(left, left + wl);
          let val = map.get(str1);
          map.set(str1, val - 1);
          num--;
          left += wl;
        }
        // 匹配之后也是同理，从左边取掉一个单词，而不是直接将 Map clear
        if (num === words.length) {
          res.push(left);
          let str1 = s.slice(left, left + wl);
          let val = map.get(str1);
          map.set(str1, val - 1);
          num--;
          left += wl;
        }
      } else {
        map.clear();
        num = 0;
        left = j + wl;
      }
    }
  }
  return res;
};

findSubstring('barfoothefoobarman', ["foo","bar"]);

