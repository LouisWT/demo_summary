// 2 鸡蛋 100 楼问题 https://zhuanlan.zhihu.com/p/41178571
// M 鸡蛋 N 楼问题 https://zhuanlan.zhihu.com/p/41257286

// f(n, m) 指 n 层楼 m 个鸡蛋最少的测试次数
// 状态转移方程 f(n, m) = min(max(f(n-x, m) + 1, f(x-1, m-1) + 1)) x 取 1~n
function getMN(n, m) {
  // 初始化状态转移矩阵
  // m 个鸡蛋
  if (n === undefined || m === undefined) return -1;
  let max = new Array(m);
  for (let i = 0; i < m; i++) {
    // n+1 个元素，n 层楼，从第二个元素开始算，也就是说可以取到下标为 n
    const arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    max[i] = arr;
  }
  // 只有一个鸡蛋只能老老实实一层一层扔
  for (let i = 1; i <= n; i++) {
    max[0][i] = i;
  }
  // 从俩鸡蛋 两层楼问题开始解
  for (let i = 1; i < m; i++) {
    for (let j = 2; j <= n; j++) {
      let min = Infinity;
      for (let x = 1; x <= j; x++) {
        const time = Math.max(max[i][j - x] + 1, max[i-1][x - 1] + 1);
        if (min > time) {
          min = time;
        }
      }
      max[i][j] = min;
    }
  }
  return max[m-1][n];
} 

console.log(getMN(100, 2));
