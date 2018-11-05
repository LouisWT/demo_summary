// 微信公众号
// M x N 维数组中，每个元素都是数字
// 从左上走到右下角, 每一步可以向右走或者向下走
// 怎样走路径上数字的总和最大

const martix = [
  [300, 500, 560, 400, 160],
  [1000, 100, 200, 340, 690],
  [600, 500, 500, 460, 320],
  [300, 400, 250, 210, 760],
];

function calBestPath(best) {
  const M = best.length;
  const N = best[0].length;
  const path = [[M - 1, N - 1]];
  let x = M - 1;
  let y = N - 1;
  while (x >= 0 && x < M && y >= 0 && y < N) {
    if (x == 0 && y == 0) {
      break;
    } else if (x == 0) {
      path.push([0, y - 1]);
      y = y - 1;
    } else if (y == 0) {
      path.push([x - 1, 0]);
      x = x - 1;
    } else if (best[x - 1][y] < best[x][y - 1]) {
      path.push([x, y - 1]);
      y = y - 1;
    } else {
      path.push([x - 1, y]);
      x = x - 1;
    }
  }
  return path;
}

function calMax(martix) {
  // 初始化数字最大矩阵
  if (!martix) {
    return [];
  }
  const best = new Array(martix.length);
  for(let i = 0; i < martix.length; i++) {
    const temp = new Array(martix[0].length);
    best[i] = temp;
  }
  // 保存中间状态
  // 关键在于总结出 best(i, j) 的一般公式
  for (let x = 0; x < martix.length; x++) {
    for (let y = 0; y < martix[0].length; y++) {
      if (x == 0 && y == 0) {
        best[0][0] = martix[0][0];
      } else if (x == 0) {
        best[0][y] = best[0][y - 1] + martix[0][y];
      } else if (y == 0) {
        best[x][0] = best[x - 1][0] + martix[x][0];
      } else {
        best[x][y] = Math.max(best[x - 1][y], best[x][y - 1]) + martix[x][y];
      }
    }
  }
  const path = calBestPath(best);
  return path.reverse();
}

console.log(calMax(martix));

