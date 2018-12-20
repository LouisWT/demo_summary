// p193 在排序数组中找出给定数字出现的次数

function getNum(arr, k) {
  if (!arr || k === undefined) return 0;
  const low = findLow(arr, k);
  const high = findHig(arr, k);
  if (low === -1) return 0;
  return high - low + 1;
}

function findLow(arr, k) {
  let lo = 0;
  let hi = arr.length - 1;
  let index = -1;
  while(lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > k) {
      hi = mid - 1;
    } else if (arr[mid] < k) {
      lo = mid + 1;
    } else {
      if (mid == 0 || arr[mid - 1] < k) {
        index = mid;
        break;
      } else {
        hi = mid - 1;
      }
    }
  }
  return index;
}

function findHig(arr, k) {
  let lo = 0;
  let hi = arr.length - 1;
  let index = -1;
  while(lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > k) {
      hi = mid - 1;
    } else if (arr[mid] < k) {
      lo = mid + 1;
    } else {
      if (mid == arr.length - 1 || arr[mid + 1] > k) {
        index = mid;
        break;
      } else {
        lo = mid + 1;
      }
    }
  }
  return index;
}

console.log(getNum([1, 2, 2, 2, 3], 2))