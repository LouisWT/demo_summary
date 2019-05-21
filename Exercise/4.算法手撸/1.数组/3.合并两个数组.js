// arr1 arr2 都是有序的，合并到一起，并且不用额外空间
// arr1足够大
// 倒着合并
function merge(arr1, arr2) {
  if(!arr1 || !arr2) return;
  let n = arr1.length - 1;
  let m = arr2.length - 1;
  let length = arr1.length + arr2.length;
  for (let i = length - 1; i >= 0; i--) {
    if (n < 0) {
      arr1[i] = arr2[m--];
    } else if (m < 0) {
      arr1[i] = arr1[n--];
    } else if (arr1[n] < arr2[m]) {
      arr1[i] = arr2[m--];
    } else {
      arr1[i] = arr1[n--];
    }
  }
  return arr1;
}

let arr1 = [];
let arr2 = [2,4,6,8,10];
merge(arr1, arr2);
console.log(arr1);