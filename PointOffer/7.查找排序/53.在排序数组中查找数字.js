// 263
// 求数字在排序数组中出现的次数

function getNumber(arr, n) {
  if (!arr) { return 0; }
  let lo = 0;
  let hi = arr.length - 1;
  let count = 0;
  while(lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = arr[mid];
    if (val == n) {
      // 向前向后找一下计算次数
      count = 1;
      let temp = mid;
      while(arr[--temp] == val) { count++; }
      temp = mid;
      while(arr[++temp] == val) { count++; }
      break;
    }
    else if (val > n) {
      hi = mid - 1;
    }
    else {
      lo = mid + 1;
    }
  }
  return count;
}

function getNumberOfN(arr, n) {
  if (!arr) { return 0; }
  const first = getFirstN(arr, n);
  const last = getLastN(arr, n);
  if (first === undefined || last === undefined) {
    return 0;
  }
  return last - first + 1;
}

function getFirstN(arr, n) {
  let lo = 0;
  let hi = arr.length - 1;
  while(lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = arr[mid];
    if (val == n) {
      // 如果是第一个或者前一个已经比现在这个小了，说明已经是第一个
      if (mid == 0 || arr[mid - 1] < n) {
        return mid;
      }
      // 否则就将hi 挪一下
      else {
        hi = mid - 1;
      }
    }
    else if (val > n) {
      hi = mid - 1;
    }
    else {
      lo = mid + 1;
    }
  }
}

function getLastN(arr, n) {
  let lo = 0;
  let hi = arr.length - 1;
  while(lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = arr[mid];
    if (val == n) {
      // 如果是最后一个或者后一个已经比现在这个小了，说明已经是第一个
      if (mid == arr.length - 1 || arr[mid + 1] > n) {
        return mid;
      }
      // 否则就将lo 挪一下
      else {
        lo = mid + 1;
      }
    }
    else if (val > n) {
      hi = mid - 1;
    }
    else {
      lo = mid + 1;
    }
  }
}

console.log(getNumberOfN([3,3,3,3,4,5], 3))