// p204 **
// 给定一个含有 n 个元素的整型数组 arr, 其中只有一个元素出现了奇数次,找出这个元素

// 由于数字自己和自己异或结果为 0, 自己和0异或结果为自己

function findOdd(arr) {
  if (!arr) return;
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
}

console.log(findOdd([1, 2, 2, 3, 3, 4, 1]))