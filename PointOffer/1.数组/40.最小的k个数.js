// p 209
// 输入n个整数，找出其中最小的 k 个数。

// 方法一，如果允许改变数组
// 时间复杂度 O(n)
function findKNumber(arr, k) {
  if (!arr || k <= 0 || k > arr.length) return [];
  if (k == arr.length) {
    return arr.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      else return 0;
    });
  }
  find(arr, 0, arr.length - 1, k);
  const all = arr.slice(0, k);
  all.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
  });
  return all;
}

function find(arr, lo, hi, k) {
  if (lo == hi && lo == k) return;
  if (lo >= hi) return;
  const j = partition(arr, lo, hi);
  if (j == k) {
    return;
  }
  else if (j < k) return find(arr, j + 1, hi, k);
  else return find(arr, lo, j - 1, k);
}

function partition(arr, lo, hi) {
  let i = lo;
  let j = hi + 1;
  const val = arr[lo];
  while (true) {
    while (arr[++i] <= val) { if (i == hi) break; }
    while (arr[--j] >= val) { if (j == lo) break; }
    if (i >= j) break;
    swap(arr, i, j);
  }
  swap(arr, lo, j);
  return j;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = findKNumber([4,5,1,6,2,7,3,8], 4);
console.log(arr);

// 方法二 维护一个 k 个元素的临时存储
// 用数组存储不好，每次遍历一次才能找到最大值
// 应该用二叉树或者最大堆(特殊二叉树)这种结构
// 优点：不需要修改输入数据; 适用于海量数据
function newFindKNumber (arr, k) {
  if (!arr || k <= 0 || k > arr.length) return [];
  if (k == arr.length) {
    return arr.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      else return 0;
    });
  }
  const all = [];
  for (let i = 0; i < arr.length; i++) {
    if (all.length < k) {
      all.push(arr[i]);
    }
    else if (all.length == k) {
      const index =  getAllMax(all);
      if (all[index] > arr[i]) {
        all[index] = arr[i];
      }
    } 
  }
  return all.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
  });
}

function getAllMax (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return max;
}