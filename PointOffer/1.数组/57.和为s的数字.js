// p280
// 输入一个递增数组和一个数字s，查找两个数，使它们的和为 s，如果有多对，输出任意一对
// 两个指针，一个指向头部，一个指向尾部
// 如果前后两个数字和大于s，那么尾部指针前移
// 如果小于 s，那么头部指针后移

// 第二个方法：使用哈希表
// 遍历一遍数组，将数字都记录到哈希表
// 再遍历的时候，查看 s-当前数字 得到的数是否在哈希表中
function FindNumbersWithSum(array, sum) {
  if (!array) { return []; }
  let lo = 0;
  let hi = array.length - 1;
  while (lo <= hi) {
    if (array[lo] + array[hi] == sum) {
      return [array[lo], array[hi]];
    }
    else if (array[lo] + array[hi] < sum) {
      lo++;
    }
    else if (array[lo] + array[hi] > sum) {
      hi--;
    }
  }
  return [];
}

// 3-sum和 4-sum 的思想是一样的
// 也是使用指针法和哈希表法
// 指针法就是在外圈在加一个 0<= i <= len - 1 的指针
// start 指针初始为 i + 1，next 指针初始为 len - 1 
// 之后就是将 2 sum 的过程套在 i 的循环中就好了。

// 哈希表法也是一样