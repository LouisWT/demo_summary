function deleteDup(arr) {
  if (!arr) return null;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

// 对排序数组去重
function deleteSort(arr) {
  if (!arr) return null;
  let res = [];
  let prev = null;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== prev) {
      res.push(arr[i]);
    }
    prev = arr[i];
  }
  return res;
}

console.log(deleteSort([1, 2, 2, 3, 3, 3, 4]));

// 使用 filter 简化
console.log([1, 2, 2, 3, 3, 3, 4].filter((value, index, arr) => { return arr.indexOf(value) === index }));

const deleteD = (arr) => [...new Set(arr)];
console.log(deleteD([1, 2, 2, 3, 3, 3, 4]))