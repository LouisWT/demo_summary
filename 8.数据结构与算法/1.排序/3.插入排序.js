// 原理：就像整理牌一样，一张一张的来，将每张牌插入到其他有序的牌中的适当位置

// 通过不断的比较得到最后一个元素
// 然后对剩余元素重复这个过程，跟冒泡排序类似
// 但是冒泡排序是排序规模越来越小
// 插入排序时排序规模越来越大(将一个元素插入到一个有序序列，但是序列的规模越来越大)
function insertSort(arr) {
  if (!arr) return;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j - 1, j);
      }
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);
insertSort(arr);
console.log(arr);