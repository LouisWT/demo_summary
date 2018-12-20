// 给定一个升序排列的整数数组 arr，以及一个正整数 k, 现在需要再 arr 中查找两个元素 a 和 b，使得 |a-b| = k，事件复杂度为 o(n)

function getK(arr, k) {
  if (!arr || arr.length === 1 || k === undefined || k < 0) return [];
  let lo = 0;
  let hi = 1;
  while(lo <= hi) {
    const minus = Math.abs(arr[hi] - arr[lo]);
    if (minus < k) {
      hi++;
    } else if (minus > k) {
      lo++;
    } else {
      // 防止输入 k 为0
      if (lo !== hi) {
        return [lo, hi];
      } else {
        hi++;
      }
    }
  }
  return [];
}

console.log(getK([1, 2, 3, 4], 2))
console.log(getK([1, 2, 2, 4], 0))