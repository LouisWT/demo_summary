// p218
// 输入一个整型数组，数组里有正数也有负数。数组中的一个或多个**连续**多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为 o(n)

// 使用动态规划的思想
// maxArr 表示算上当前元素，能达到的最大和。
// maxArr[0] = arr[0];
// maxArr[i] = Math.max(maxArr[i - 1] + arr[i], arr[i])
function subMaxSum(arr) {
  if (!arr) return 0;
  const maxArr = new Array(arr.length);
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      maxArr[0] = arr[0];
      max = arr[0];
      continue;
    }
    maxArr[i] = Math.max(maxArr[i - 1] + arr[i], arr[i])
    if (maxArr[i] > max) {
      max = maxArr[i];
    }
  }
  return max;
}

// 不用辅助数组的写法
function newSubMaxSum(arr) {
  if (!arr) return 0;
  let max = 0;
  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      max = arr[0];
      curSum = arr[0];
      continue;
    }
    curSum = Math.max(curSum + arr[i], arr[i]);
    if (curSum > max) {
      max = curSum;
    }
  }
  return max;
}