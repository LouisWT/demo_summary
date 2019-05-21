/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// 首先根据 count 来排序，count 比较小的排在前面，count 大的排在后面
// 对于相同 count 的人，根据身高由小到大排序
// 遍历到第i个元素时，看它之前比它高的人的人数是否大于 count
// 如果大于 count ，那么将它插入到刚好让它不满足条件的人之前
// 如果等于 count ，继续遍历
var reconstructQueue = function(people) {
  if (!people || people.length === 0) return [];
  people.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else return a[0] > b[0] ? 1 : -1;
  })
  for (let i = 0; i < people.length; i++) {
    let [h, k] = people[i];
    let count = 0;
    let j;
    for (j = 0; j < i; j++) {
      if (people[j][0] >= h) count++;
      if (count > k) break;
    }
    if (count === k) continue;
    if (count > k) {
      let tmp = people[i];
      people.splice(i, 1);
      people.splice(j, 0, tmp);
      i--;
    }
  }
  return people;
};
