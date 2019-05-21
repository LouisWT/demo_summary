// 304 **
// 把股票价格按时间先后顺序存储在数组中，计算买卖这个股票一次可能获得的最大利润是多少

// 用一个变量记录当前遍历到的最小价格
// 用另外一个变量记录当前获得的最大价值
// 当前价格获得的最大价值肯定是当前价格减去之前的最小价格
function getMax(arr) {
  if (!arr) return 0;
  let min;
  let minusMax;
  // 只要在遍历时记住之前的最小值，那么就有可能得到最大利润
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      min = arr[0];
      continue;
    }
    const minus = arr[i] - min;
    if (!minusMax || minusMax < minus) {
      minusMax = minus;
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return minusMax;
}

console.log(getMax([9, 11, 8, 5, 7, 12, 16, 14]));
console.log(getMax([11, 9, 8, 7, 6]));