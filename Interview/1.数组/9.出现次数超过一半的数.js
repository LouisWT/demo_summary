// p196
// 要求 o(n) 时间复杂度
// 剑指 offer 数组

// 每次取出两个不同的数,剩下的数字中重复出现的数字肯定比其他数字多,不断重复这个过程,最后剩下的将是同样的数字

function findDup(arr) {
  if (!arr) return;
  let count = 0;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      index = i;
      count = 1;
    } else {
      if (arr[i] == arr[index]) {
        count++;
      } else {
        count--;
      }
    }
  }
  return arr[index];
}