// 现有 n 个红白蓝三种不同颜色的小球，乱序排列在一起，通过两两交换任意两个小球，使得从左到右依次是一些红球 R，一些白球 W，一些蓝球 B

// 维护 begin end 的两个指针
// begin 指向最新 R 元素，end 指向最新 B 元素
// 初始化为 -1 和 length
// curr 是当前元素
// 如果当前元素是 R, 将 begin 元素的后一个元素和 当前元素交换，begin++ curr++
// 如果当前元素是 B, 将 end 元素的前一个元素与 curr 元素交换，end-- curr 不变
// 如果当前元素是 W, curr++

function herland(arr) {
  if (!arr) return [];
  let begin = -1;
  let end = arr.length;
  let curr = 0;
  while (curr < end) {
    if (arr[curr] == 'R') {
      swap(arr, ++begin, curr);
      curr++;
    } else if (arr[curr] == 'B') {
      swap(arr, curr, --end);
    } else {
      curr++;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(herland(['W', 'B', 'R', 'R', 'R']))