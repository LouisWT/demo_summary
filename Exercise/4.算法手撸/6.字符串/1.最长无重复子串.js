// 字符串的最长无重复子串

var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let map = new Array(26);
  map.fill(-1);
  let max = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let key = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (i == 0) {
      max = 1;
      res = 1;
      map[key] = 0;
      continue;
    }
    if (map[key] !== -1 && (i - map[key] <= max)) {
      max = i - map[key];
    } else {
      max += 1;
    }
    if (max > res) {
      res = max;
    }
    map[key] = i;
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"))