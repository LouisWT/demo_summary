/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 
var canFinish = function(numCourses, prerequisites) {
  if (numCourses === 0) return true;
  // 表示这门课之前需要上几门课
  let counts = new Array(numCourses);
  counts.fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    // 需要多少个前提
    counts[prerequisites[i][0]]++;
  }
  // 这轮循环是否上了新课，如果有一轮循环一个新课都没上，说明是死循环了
  let hasNew = true;
  while (hasNew) {
    hasNew = false;
    let i = 0;
    while (i < prerequisites.length) {
      let prev = prerequisites[i][1];
      let curr = prerequisites[i][0];
      // 如果前提课能上了，那么就上这门课
      if(counts[prev] === 0 && counts[curr] > 0) {
        counts[curr]--;
        if (counts[curr] === 0) hasNew = true;
        prerequisites.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > 0) return false;
  }
  return true;
};

