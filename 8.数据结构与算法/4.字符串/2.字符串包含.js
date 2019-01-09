// 给定两个由字幕组成的字符串A 和 字符串 B，字符串 B 的长度比字符串 A 短，请问，如何最快的判断字符串 B 中所有字母都出现在字符串 A 里？

// 1. 针对 B 中每一个字母，都在 A 里面找是否有对应的字母，这个算法复杂度太高，o(m*n)

// 2. 将两个字符串进行排序，然后有两个索引，对这两个字符串比较，排序的复杂度 o(nlgn)+o(mlgm)，查找的复杂度，o(n + m)

// 3. 将 A~Z 所有字母都对应为不同素数，利用这个对应关系求出两个字符串的乘积，如果第一个字符串的乘积可以整除第二个字符串的乘积，那么第一个字符串包含第二个字符串的乘积，这个的问题在于，乘积有溢出的危险

// 4. bitmap，将A~Z对应到26个bit位
// 空间复杂O(1), 时间复杂 O(m+n)
function stringContain(str1, str2) {
  let hash = 0;
  for (let i = 0; i < str1.length; i++) {
    let position = str1[i].charCodeAt(0) - 'A'.charCodeAt(0);
    hash |= 1 << position;
  }
  for (let i = 0; i < str2.length; i++) {
    let position = str2[i].charCodeAt(0) - 'A'.charCodeAt(0);
    let result = hash >> position && 1
    if (!hash || result === 0 ) {
      return false;
    }
  }
  return true;
}

console.log(stringContain('ABCD', 'BAD'))
console.log(stringContain('ABCD', 'BCE'))