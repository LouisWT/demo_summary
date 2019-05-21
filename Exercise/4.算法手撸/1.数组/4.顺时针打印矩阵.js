function printMatrix(arr) {
  if (!arr) return [];
  let rs = 0;
  let re = arr.length - 1;
  let cs = 0;
  let ce = arr[0].length - 1;
  let res = []
  while (rs < re && cs < ce) {
    // 打印第一行
    for (let i = cs; i <= ce; i++) {
      res.push(arr[rs][i]);
    }
    rs++;
    // 打印最后一列
    for (let i = rs; i <= re; i++) {
      res.push(arr[i][ce]);
    }
    ce--;
    // 打印最后一行
    for (let i = ce; i >= cs; i--) {
      res.push(arr[re][i]);
    }
    re--;
    // 打印第一列
    for (let i = re; i>= rs; i--) {
      res.push(arr[i][cs]);
    }
    cs++;
  }
  // 如果还没有打印完，继续打印剩下的部分
  if (rs == re) {
    for (let i = cs; i <= ce; i++) {
      res.push(arr[rs][i]);
    }
  } else if (cs == ce) {
    for (let i = rs; i <= re; i++) {
      res.push(arr[i][cs]);
    }
  }
  return res;
}