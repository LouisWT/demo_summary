/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//   if (!intervals || intervals.length === 0) return [];
//   intervals.sort((a, b) => {
//     if (a[0] <= b[0]) return -1;
//     else return 1;
//   })
//   let pos = 0;
//   while (pos + 1 < intervals.length) {
//     let prev = intervals[pos];
//     let next = intervals[pos + 1];
//     if (prev[1] >= next[0]) {
//       prev[1] = Math.max(prev[1], next[1]);
//       intervals.splice(pos + 1, 1);
//     } else {
//       pos++;
//     }
//   }
//   return intervals;
// };

var merge = function(intervals) {
  if (!intervals || intervals.length === 0) return [];
  intervals.sort((a, b) => {
    if (a[0] <= b[0]) return -1;
    else return 1;
  })
  let pos = 0;
  let prev = intervals[0];
  let res = [prev];
  while (pos + 1 < intervals.length) {
    let next = intervals[pos + 1];
    if (prev[1] >= next[0]) {
      // prev 已经 push 进 res 了，所以不用重复 push
      prev[1] = Math.max(prev[1], next[1]);
    } else {
      prev = next;
      res.push(prev);
    }
    pos++;
  }
  return res;
};

