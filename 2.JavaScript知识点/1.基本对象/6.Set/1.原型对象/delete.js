// 移除 Set 值与这个值相等的值

var mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // 返回 false，不包含 "bar" 这个元素
mySet.delete("foo"); // 返回 true，删除成功

mySet.has("foo");    // 返回 false，"bar" 已经成功删除