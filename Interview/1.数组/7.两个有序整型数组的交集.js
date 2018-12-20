// p195
// 计算两个有序整型数组的交集

// 两个数组都从头遍历，如果相等，那就加入交集，如果不能，小的一方索引+1
function findSame(arr1, arr2) {
  if (!arr1 || !arr2) return [];
  let index1 = 0;
  let index2 = 0;
  let arr = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      index1++;
    } else if (arr1[index1] > arr2[index2]) {
      index2++;
    } else {
      arr.push(arr1[index1]);
      index1++;
      index2++;
    }
  }
  return arr;
}

console.log(findSame([0, 1, 2], [3, 4, 5, 6]))
