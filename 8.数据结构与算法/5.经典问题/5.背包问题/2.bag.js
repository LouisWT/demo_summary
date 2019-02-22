// n 指背包的容量
// m 指商品的数量
// w 指商品的重量数组
// v 指商品的价值数组
function bagMax(n, w, v) {
  if (!n || n <= 0 || !w || !v) return 0;
  let max = [];
  let m = w.length;
  for(let i = 0; i <= m; i++) {
    max[i] = new Array(n);
  }
  // m 为商品数量
  for (let i = 0; i <= m; i++) {
    // n 为背包剩余体积
    for (let j = 0; j <= n; j++) {
      if (i == 0) {
        max[0][j] = 0;
        continue;
      }
      max[i][j] = max[i - 1][j];
      // 第 i 件商品就是 w v 数组的第 i - 1 个元素
      if (j >= w[i - 1]) {
        let putValue = max[i - 1][j - w[i - 1]] + v[i - 1];
        let notPutValue = max[i - 1][j];
        max[i][j] = Math.max(putValue, notPutValue);
      }
    }
  }
  let temp = [];
  let j = n;
  for (let i = m; i > 0; i--) {
    if (max[i][j] > max[i - 1][j]) {
      temp.push(i - 1);
      j = j - w[i - 1];
    }
  }
  return temp.sort();
}

let w1 = [
  4,
  3,
  5,
  2,
  5
]

let w2 = [
  4,
  3,
  4,
  2
];

let w3 = [
  2,
  2,
  6,
  5,
  4
]

let v1 = [
 9,
 6,
 1,
 4,
 1
];

let v2 = [
  20,
  6,
  20,
  4
];

let v3 = [
  6,
  3,
  5,
  4,
  6
]

console.log(bagMax(10, w1, v1));
console.log(bagMax(9, w2, v2));
console.log(bagMax(10, w3, v3));