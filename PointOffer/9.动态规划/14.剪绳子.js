// p96
// 有一根长度为 n 的绳子，请把绳子剪成 m 段(n > 1, m > 1, 也就是说至少有两段)，每段绳子长度记为 k[1]k[2]...k[m]，请问 k[0] x k[1] x ...k[m]可能的最大乘积

// calMax(n) = calMax(i) + calMax(n - i)
function calMax(n) {
  if (n < 2) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  if (n == 3) {
    return 2;
  }
  let products = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    let max = 0;
    // 计算 calMax(i)
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      const product = products[j] * products[i - j];
      if (max < product) {
        max = product
      }
    }
    products[i] = max;
  }
  return products[n];
}

console.log(calMax(4));
console.log(calMax(5));
console.log(calMax(6));
console.log(calMax(7));
console.log(calMax(8));
console.log(calMax(18));