// 提取一个字符串的一部分
// 返回一个从原字符串中提取出来的新字符串
// str.slice(begin, [end])

var str = 'The morning is upon us.';

// The m
console.log(str.slice(0, 5))
// The m
console.log(str.substring(0, 5))

// morning is upon u
console.log(str.slice(4, -2));
// The (如果有参数小于0, substring 会当作0, 如果第一个参数大于第二个参数,会将两个参数调换位置)
console.log(str.substring(4, -2));

// us.
console.log(str.slice(-3));     
// The morning is upon us.
console.log(str.substring(-3));     

// us
console.log(str.slice(-3, -1)); 
// 空字符,如果有参数小于0, substring 会当作0,如果start == end,那么就没有
console.log(str.substring(-3, -1)); 

// The morning is upon us
console.log(str.slice(0, -1));
// 空字符
console.log(str.substring(0, -1));