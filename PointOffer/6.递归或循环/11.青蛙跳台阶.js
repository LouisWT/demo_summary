// p77
// 一只青蛙一次可以跳上1级台阶，也可以跳上两级台阶，青蛙跳上 n 级台阶有多少种跳法。

// 方法1：
// 当台阶有两级，那么有两种跳法，当台阶有一级，只有一种跳法
// 如果最后一次是跳了一级，那么剩下的跳法数就是 accessN(n - 1)
// 如果最后一次是跳了两级，那么剩下的跳法就是 accessN(n - 2)
// 总的跳法是这两种情况相加
// 缺点是效率不高
function accessN(n) {
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return n;
    }
    return accessN(n - 1) + accessN(n - 2);
}

console.log(accessN(3));


// 方法2：
// 用循环对上面方法改写
function newAccessN(n) {
    const result = [0, 1, 2];
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return result[n];
    }
    for (let i = 3; i <= n; i++) {
        result[n] = result[n - 1] + result[n - 2];
    }
    return result[n];
}

