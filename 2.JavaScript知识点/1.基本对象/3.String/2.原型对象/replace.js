// 返回一个由替换值替换一些或所有匹配的模式后的新字符串
// 原字符串不会改变
// str.replace(regexp|substr, newSubStr|function)
// replace 非常强大

// 1. 模式可以是字符串或者正则表达式，

// 2. 进行全局的搜索替换时，正则表达式需包含 g 标志
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");

// oranges are round, and oranges are juicy.
console.log(newstr);

// 3. 交换字符串两个值
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
console.log(newstr);