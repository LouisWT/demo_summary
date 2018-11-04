// p78
// 扩展：
// 青蛙可以跳 1 级，2级... n 级 台阶
// accessN(n) = accessN(n-1) + accessN(n-2) + ... + accessN(1)
// accessN(n-1) = accessN(n-2) + accessN(n-3) + ... + accessN(1)
// 上下相减，accessN(n) - accessN(n-1) = accessN(n-1)
// accessN(n) = 2 * accessN(n-1);
// 所以这是个等比数列，accessN(1) = 1
// accessN(n) = 2^(n-1)

function accessN(n) {
    if (n <= 0) {
        return 0;
    }
    return Math.pow(2, n - 1);
}

console.log(accessN(4));
