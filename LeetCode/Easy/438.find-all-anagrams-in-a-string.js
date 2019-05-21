/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 使用 map 来记录 p 中得字符得种类和频率
// 滑动窗口法，每次统计窗口内得字符，也是用 map，遍历 map 中的键值对是否一致
var findAnagrams = function(s, p) {
  if (!s || s.length < p.length) return [];
  let lo = 0;
  let hi = p.length - 1;
  let pmap = new Map();
  let smap = new Map();
  let res = [];
  for (let i = 0; i < p.length; i++) {
    if (!pmap.has(p[i])) pmap.set(p[i], 1);
    else pmap.set(p[i], pmap.get(p[i]) + 1);

    if (!smap.has(s[i])) smap.set(s[i], 1);
    else smap.set(s[i], smap.get(s[i]) + 1);
  }
  while (hi < s.length) {
    let flag = true;
    for (let [key, val] of pmap.entries()) {
      if (smap.get(key) !== val) flag = false;
    }
    if (flag) res.push(lo);
    smap.set(s[lo], smap.get(s[lo]) - 1);
    lo++;
    hi++;
    if (hi === s.length) break;
    if (!smap.has(s[hi])) smap.set(s[hi], 1);
    else smap.set(s[hi], smap.get(s[hi]) + 1);
  }
  return res;
};

// 由于 s 和 p 中只有小写的字符，所以可以分别是用 26 个元素的数组来代替 <map name=""></map>
function findAnagrams(s, p) {
  let res = [];
  if (!s || !p || s.length < p.length) return res;
  let pchar = new Array(26);
  let schar = new Array(26);
  let base = 'a'.charCodeAt();
  pchar.fill(0);
  schar.fill(0);
  for (let i = 0; i < p.length; i++) {
    pchar[p[i].charCodeAt() - base] += 1;
    schar[s[i].charCodeAt() - base] += 1;
  }
  let lo = 0;
  let hi = p.length - 1;
  while (hi < s.length) {
    let flag = true;
    for (let i = 0; i < 25; i++) {
      if (schar[i] !== pchar[i]) flag = false;
    }
    if (flag) res.push(lo);
    schar[s[lo].charCodeAt() - base] -= 1;
    lo++;
    hi++;
    if (hi === s.length) break;
    schar[s[hi].charCodeAt() - base] += 1;
  }
  return res;
}