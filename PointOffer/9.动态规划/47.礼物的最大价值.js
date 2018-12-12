// p233
// M x N 维数组中，每个元素都是数字
// 从左上走到右下角, 每一步可以向右走或者向下走
// 求走到右下角累加数字的最大值

const martix = [
  [300, 500, 560, 400, 160],
  [1000, 100, 200, 340, 690],
  [600, 500, 500, 460, 320],
  [300, 400, 250, 210, 760],
];

function calBest(arr) {
  if (!arr) return 0;
  let M = arr.length;
  let N = arr[0].length;
  // 只存一列的值，这样减少了额外存储空间，但是如果需要求路径的话，比较难求
  let best = new Array(N);
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (i == 0 && j == 0) {
        best[0] = arr[0][0];
      }
      if (i == 0 && j != 0) {
        best[j] = best[j-1] + arr[0][j];
      }
      if (i != 0 && j == 0) {
        best[j] += arr[i][0];
      }
      if (i != 0 && j != 0) {
        best[j] = Math.max(best[j - 1], best[j]) + arr[i][j];
      }
    }
  }
  return best[N - 1];
}

console.log(calBest(martix));