/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 如果不用这个质数，就只能每次对字符串进行排序，然后看排序后的字符串之前是否出现过
// 26个质数，不能被整除，用这个来生成 hash key
let PRIMES = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107];
var groupAnagrams = function(strs) {
  if (!strs || strs.length === 0) return [];
  let res = [];
  let map = new Map();
  let base = 'a'.charCodeAt(0);
  for(let str of strs) {
    // 使用 reduce 来计算 key，记得传入初始值1
    let key = str.split('').reduce((key, curr) => {
      key *= PRIMES[curr.charCodeAt(0) - base];
      return key;
    }, 1);
    if (map.has(key)) {
      let index = map.get(key);
      res[index].push(str);
    } else {
      let index = res.length;
      res.push([str]);
      map.set(key, index);
    }
  }
  return res;
};

