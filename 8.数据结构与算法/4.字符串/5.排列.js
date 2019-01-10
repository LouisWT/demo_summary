function permutation(str) {
  if (!str) return [];
  let arr = str.split('');
  let temp = [];
  sort(arr, 0, arr.length - 1, temp, [])
  return temp;
}

function sort(arr, lo, N, res) {
  if (lo == N) {
    res.push(arr.join(''));
    return;
  }
  // 从第一个字符开始，依次和后面的字符交换
  for(let i = lo; i <= N; i++) {
    let temp = arr[i];
    arr[i] = arr[lo];
    arr[lo] = temp;
    sort(arr, lo + 1, N, res);
    temp = arr[i];
    arr[i] = arr[lo];
    arr[lo] = temp;
  }
}

console.log(permutation('abc'))