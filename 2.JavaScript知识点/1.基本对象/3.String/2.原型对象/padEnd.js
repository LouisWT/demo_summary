// 用一个字符串填充当前字符串（如果需要的话则重复填充）
// 返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充
// str.padEnd(targetLength, [subStr])

// abc[7个空字符]      
console.log('abc'.padEnd(10))
// abcfoofoof
console.log('abc'.padEnd(10, 'foo'))
// abc
console.log('abc'.padEnd(1))
// abc123
console.log('abc'.padEnd(6, '123456'))