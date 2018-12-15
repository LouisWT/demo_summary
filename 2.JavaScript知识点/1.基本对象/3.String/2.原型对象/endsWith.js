// 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的

var str = "To be, or not to be, that is the question.";

console.log( str.endsWith("question.") );  // true
console.log( str.endsWith("to be") );      // false
console.log( str.endsWith("to be", 19) );  // true