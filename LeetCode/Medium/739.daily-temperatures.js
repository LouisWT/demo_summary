/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
// 如果当前值的下一个值大于当前值,那么就将它置为1,否则将当前的位置记下来,然后继续向后找,直到比它大
// var dailyTemperatures = function(T) {
//   if (!T || T.length === 0) return [];
//   let res = new Array(T.length);
//   res.fill(0);
//   let map = new Map();
//   for (let i = 0; i + 1 < T.length; i++) {
//     for (let [key, positions] of map.entries()) {
//       if (T[i] > key) {
//         for (let pos of positions) {
//           res[pos] = i - pos;
//         }
//         map.delete(key);
//       }
//     }
//     if (T[i+1] > T[i]) {
//       res[i] = 1;
//       continue;
//     } else {
//       if (!map.has(T[i])) map.set(T[i], []);
//       map.get(T[i]).push(i);
//     }
//   }
//   for (let [key, positions] of map.entries()) {
//     if (T[T.length - 1] > key) {
//       for (let pos of positions) {
//         res[pos] = T.length - 1 - pos;
//       }
//       map.delete(key);
//     }
//   }
//   res[T.length - 1] = 0;
//   return res;
// };

// dailyTemperatures([73,74,75,71,69,72,76,73])
// 使用栈,记住之前元素出现的位置
// 看到一个新元素时,将栈顶位置取出,看新元素是否大于这个位置的元素,如果大于,那么就得到了栈顶位置的值
// 不断重复,直到不满足大于关系,那么就停止比较
// 将新元素的位置入栈
// 比如 [73,74,75,71,69,72,76,73]
// stack [73] res []
// stack [74] res[1]
// stack [75] res[1,1]
// stack [75,71] res[1,1,0]
// stack [75,71,69] res[1,1,0,0]
// stack [75] res[1,1,0,2,1]
// stack [76] res[1,1,4,2,1,0]
// stack [76,73] res[1,1,4,2,1,0,0]
function dailyTemperatures(temp) {
  if (!temp || temp.legnth === 0) return [];
  let stack = [];
  let res = new Array(temp.length);
  res.fill(0)
  for (let i = 0; i < temp.length; i++) {
    while (stack.length > 0 && temp[i] > temp[stack[stack.length - 1]]) {
      let pos = stack.pop();
      res[pos] = i - pos;
    }
    stack.push(i);
  }
  return res;
}
