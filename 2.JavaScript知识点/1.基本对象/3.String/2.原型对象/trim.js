// 从一个字符串的两端删除空白字符
// trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。

var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

orig = 'foo    ';
console.log(orig.trim()); // 'foo'