// p74
// 求斐波那契数列第n项

// 方法1：
// 有很多重复的计算，效率非常低。
function fibN(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return n;
    }
    return fibN(n - 1) + fibN(n - 2);
}

// console.log(fibN(100));

// 方法二:
// 用循环而不是递归，将结果存下来
function newFibN(n) {
    let result = [0, 1];
    if (n < 0) {
        return result[0];
    }
    if (n <= 1) {
        return result[n];
    }
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
}

console.log(newFibN(10));
