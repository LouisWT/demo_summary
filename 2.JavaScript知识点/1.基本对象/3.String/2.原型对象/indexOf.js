// 返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。
// 如果未找到该值，则返回-1。
// indexOf(str, fromIndex);

"Blue Whale".indexOf("Blue");     // returns  0
"Blue Whale".indexOf("Blute");    // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("", 9);      // returns  9
"Blue Whale".indexOf("", 10);     // returns 10
"Blue Whale".indexOf("", 11);     // returns 10