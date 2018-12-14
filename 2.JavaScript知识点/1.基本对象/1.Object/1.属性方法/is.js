// 判断两个值是否是相同的值

// Object.is 与 === 类似,区别在于
// Object.is 认为 +0 与 -0 不等
// Object.is 认为 NaN 与 NaN 相等

// true
console.log(+0 === -0)
// false
console.log(Object.is(+0, -0))

// false
console.log(NaN === NaN)
// true
console.log(Object.is(NaN, NaN))