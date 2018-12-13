// p280
// 输入一个递增数组和一个数字s，查找两个数，使它们的和为 s，如果有多对，输出任意一对

function FindNumbersWithSum(array, sum) {
  if (!array) { return []; }
  let lo = 0;
  let hi = array.length - 1;
  while (lo <= hi) {
    if (array[lo] + array[hi] == sum) {
      return [array[lo], array[hi]];
    }
    else if (array[lo] + array[hi] < sum) {
      lo++;
    }
    else if (array[lo] + array[hi] > sum) {
      hi--;
    }
  }
  return [];
}