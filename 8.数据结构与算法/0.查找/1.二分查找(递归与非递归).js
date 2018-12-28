// 非递归
function halfSearch(arr, k) {
  if (!arr) return -1;
  return search(arr, k);
}

function search(arr, k) {
  let lo = 0;
  let hi = arr.length - 1;
  let index = -1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] == k) {
      index = mid;
      break;
    } else if (arr[mid] > k) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return index;
}

// 递归
function halfSearch2(arr, k) {
  if (!arr) return -1;
  return search2(arr, 0, arr.length - 1, k);
}

function search2(arr, lo, hi, k) {
  if (lo > hi) return -1;
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] == k) {
    return mid;
  } else if (arr[mid] > k) {
    return search2(arr, lo, mid - 1, k);
  } else {
    return search2(arr, mid + 1, hi, k);
  }
}

const arr = [22, 23, 25, 79, 84];

console.log(halfSearch(arr, 22));
console.log(halfSearch2(arr, 22));
console.log(halfSearch(arr, 84));
console.log(halfSearch2(arr, 84));
console.log(halfSearch(arr, 25));
console.log(halfSearch2(arr, 25));