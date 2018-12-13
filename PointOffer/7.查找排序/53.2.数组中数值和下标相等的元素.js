// p267
// 一个单调递增的数组里每个元素都是整数并且都是唯一的。
// 找出数组中任意一个数值等于其下标的元素

function findEqual(arr) {
  if (!arr) { return -1; }
  let lo = 0;
  let hi = arr.length - 1;
  while(lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = arr[mid];
    // 当前值小于它的下标，那么它之前的值也一定小于对应的下标
    // 所以目标值一定在它之后
    if (val < mid) {
      lo = mid + 1;
    }
    // 当前值大于它的下标，那么它之后的值也一定大于对应的下标
    else if (val > mid) {
      hi = mid - 1;
    }
    else {
      return val;
    }
  }
}

console.log(findEqual([-3, -1, 1, 3, 5]));