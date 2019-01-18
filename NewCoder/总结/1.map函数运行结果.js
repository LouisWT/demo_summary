// ["1", "2", "3"].map(parseInt) 运行结果是啥，为什么
// map 函数会传入三个参数，即 value(值) index(索引) Array(原始数组)
// parseInt 会使用两个参数，string(要转的字符串) radix(进制数，如果传的是0，就当做十进制，如果是负数 或 1，转出来就是 NaN)

console.log(["1", "2", "3"].map(parseInt));

// 相当于 parseInt(1, 0, ['1', '2', '3'])
// 相当于 parseInt(2, 1, ['1', '2', '3'])
// 相当于 parseInt(3, 2, ['1', '2', '3'])

// 对于第三个参数，parseInt 会忽略
// parseInt(1, 0), 传入0进制, 当做十进制解析，得到1
// parseInt(2, 1), 传入1进制, 结果一定为 NaN
// parseInt(3, 2), 传入2进制，没有3，结果为 NaN