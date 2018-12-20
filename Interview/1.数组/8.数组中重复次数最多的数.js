// p196
// 遍历,将每个数组和重复次数的映射存为 map 

function findMaxDup(arr) {
  if (!arr) return;
  const dup = new Map();
  let maxCount = 0;
  let max;
  for(let i = 0; i < arr.length; i++) {
    const old = dup.get(arr[i]);
    let count = old == undefined ? 1 : old + 1
    if (count > maxCount) {
      maxCount = count;
      max = arr[i];
    }
    dup.set(arr[i], count);
  }
  return max;
}

console.log(findMaxDup([1, 1, 2, 2, 2, 3, 3, 3, 3]))