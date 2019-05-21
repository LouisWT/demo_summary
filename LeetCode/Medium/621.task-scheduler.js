/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// var leastInterval = function(tasks, n) {
//   if (!tasks || tasks.length === 0) return 0;
//   if (n === 0) return tasks.length;
//   // 每个任务上一次执行的时间
//   let prePos = new Map();
//   // 任务和任务数量的对应关系
//   let map = new Map();
//   for (let i = 0; i < tasks.length; i++) {
//     if (!map.has(tasks[i])) {
//       map.set(tasks[i], 0);
//     }
//     map.set(tasks[i],  map.get(tasks[i]) + 1);
//   }
//   // 所有任务
//   let uniTask = [...map.keys()];
//   let taskNum = [...map.values()];
//   sort(uniTask, taskNum, 0, taskNum.length - 1);
//   let count = 0;
//   let pos = 0;
//   let res = 0;
//   while (count < tasks.length) {
//     let flag = false;
//     for (let i = 0; i < uniTask.length; i++) {
//       if (map.get(uniTask[i]) === 0) continue;
//       if (count >= tasks.length) break;
//       if (!prePos.has(uniTask[i]) || (pos - prePos.get(uniTask[i]) > n)) {
//         prePos.set(uniTask[i], pos);
//         map.set(uniTask[i], map.get(uniTask[i]) - 1);
//         count++;
//         pos++;
//         res++;
//         flag = true;
//         break;
//       } else {
//         flag = false;
//       }
//     }
//     if (!flag) {
//       res++;
//       pos++;
//     }
//   }
//   return res;
// };


// function sort(res, count, lo, hi) {
//   if (lo >= hi) return;
//   let j = partition(res, count, lo, hi);
//   sort(res, count, lo, j - 1);
//   sort(res, count, j + 1, hi);
// }
// function partition(res, count, lo, hi) {
//   let i = lo;
//   let j = hi + 1;
//   let val = count[lo];
//   while (true) {
//     while (count[++i] >= val) { if (i === hi) break; }
//     while (count[--j] <= val) { if (j === lo) break; }
//     if (i >= j) break;
//     swap(res, i, j);
//     swap(count, i, j);
//   }
//   swap(res, lo, j);
//   swap(count, lo, j);
//   return j;
// }

// function swap(arr, i, j) {
//   let tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// }
// leastInterval(["A","B","C","D","E","A","B","C","D","E"], 4);

// 有点偏向于数学归纳法
// 比如执行 4A 3B 2E 2F 2G,间隔为3
// 首先将 A 的最小间隔位置确定
// AXXX AXXX AXXX A
// 然后将 B 插入
// ABXX ABXX ABXX A
// 插入 E
// ABEX ABEX ABXX A
// 插入 F
// ABEF ABEX ABFX A
// 插入 G
// ABEF ABEG ABFG A

// 可见在这种情况下,频度最高的 A 将任务分为了3段,每段的长度为 4,最终长度就是 3*4 + 1

// 比如执行 4A 3B 3E 2F 2G
// 首先将 A 的最小间隔位置确定
// AXXX AXXX AXXX A
// 然后将 B 插入
// ABXX ABXX ABXX A
// 插入 E
// ABEX ABEX ABEX A
// 插入 F
// ABEF ABEF ABEX A
// 插入G,有个X的位置插入一个,还有另外一个,可以插到第一个F的后面,因为它们的距离大于n就行,不需要等于n
// ABEFG ABEF ABEG A
// 这种情况下 3*4 + 1 小于 任务的总长度,所以最终的长度应该至少是任务的总长度

// 特殊情况是频度最多的字符有多个
// 比如 4A 4B 3C 2E,间隔还是3
// AXXX AXXX AXXX A
// ABXX ABXX ABXX AB
// ABCX ABCX ABCX AB
// ABCE ABCE ABCX AB
// 可见最终的长度其实只是最后的尾巴更长了,不是单独的A,而是AB
// 每段长度 * 一共多少段 + 尾巴长度
// (3 + 1) * (AB的出现频率 - 1) + AB的长度(即为 2)
function leastInterval(tasks, n) {
  let c = new Array(26);
  c.fill(0);
  for (let task of tasks) {
    c[task.charCodeAt() - 'A'.charCodeAt()]++;
  }
  c.sort((a, b) => a > b ? 1: -1);
  let i = 25;
  while (i >= 0 && c[i] === c[25]) i--;
  return Math.max(tasks.length, (c[25] - 1) * (n + 1) + 25 - i);
}

// console.log(leastInterval(["A", "A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E", "E"], 3));
