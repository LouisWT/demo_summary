// p266
// 长度为 n - 1的递增排序数组中，所有数字都是唯一的，并且每个数字都在 0 ~ n-1内，在范围 0~n-1内的n个数字中有且只有一个数字不在数组中，找出来

function getLackOne(arr) {
  if (!arr) { return 0; }
  let lo = 0;
  let hi = arr.length - 1;
  while(lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = arr[mid];
    // 如果当前值与数组下标相等，说明是后半段
    if (val == mid) {
      lo = mid + 1;
    }
    // 如果当前值大于数组下标，说明要么是这个要么是前半段
    else if (val > mid) {
      if (arr[mid - 1] == mid - 1) {
        return mid;
      }
      else if (arr[mid - 1] > mid - 1) {
        hi = mid - 1;
      }
    }
  }
}

console.log(getLackOne([0, 1, 2, 4, 5]))