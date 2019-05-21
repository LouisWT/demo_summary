function count(arr, k) {
  if (!arr) return 0;
  let f = getFirst(arr, k);
  let e = getEnd(arr, k);
  let count = 0;
  if (f !== undefined || e !== undefined) {
    count = e - f + 1;
  }
  return count;
}

function getFirst(arr, k) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi)/2);
    if (arr[mid] === k && (mid === 0 || arr[mid - 1] !== k)) {
      return mid;
    } else if (arr[mid] < k) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
}

function getEnd(arr, k) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi)/2);
    if (arr[mid] === k && (mid === arr.length - 1 || arr[mid + 1] !== k)) {
      return mid;
    } else if (arr[mid] <= k) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
}