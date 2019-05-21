/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// 这个方法没有下面的方法清晰，还是算了
// var calcEquation = function(equations, values, queries) {
//   let res = [];
//   let root = new Map();
//   let dist = new Map();
//   for (let i = 0; i < equations.length; i++) {
//     let r1 = find(root, dist, equations[i][0]);
//     let r2 = find(root, dist, equations[i][1]);
//     root.set(r1, r2);
//     dist.set(r1, dist.get(equations[i][1]) * values[i] / dist.get(equations[i][0]));
//   }
//   for (let i = 0; i < queries.length; i++) {
//     if (!root.has(queries[i][0]) || !root.has(queries[i][1])) {
//       res[i] = -1;
//       continue;
//     }
//     let r1 = find(root, dist, queries[i][0]);
//     let r2 = find(root, dist, queries[i][1]);
//     if (r1 !== r2) {
//       res[i] = -1;
//       continue;
//     }
//     res[i] = dist.get(queries[i][0]) / dist.get(queries[i][1]);
//   }
//   return res;
// };

// function find(root, dist, s) {
//   if (!root.has(s)) {
//     root.set(s, s);
//     dist.set(s, 1);
//     return s;
//   }
//   if (root.get(s) === s) return s;
//   let last = root.get(s);
//   let p = find(root, dist, last);
//   root.set(s, p);
//   dist.set(s, dist.get(s) * dist.get(last));
//   return p;
// }

// 使用图的方式来保存除数与被除数的关系
// a / b = 2，那么 a b 相当于图的两个节点，a -> b 权重为 2，b -> a 权重为 0.5
// 图建立之后，对图进行深度优先遍历就好了
function calcEquation(e, v, q) {
  let pairs = new Map();
  let values = new Map();
  for (let i = 0; i < e.length; i++) {
    let [key1, key2] = e[i];
    if (!pairs.has(key1)) {
      pairs.set(key1, []);
      values.set(key1, []);
    }
    if (!pairs.has(key2)) {
      pairs.set(key2, []);
      values.set(key2, []);
    }
    pairs.get(key1).push(key2);
    pairs.get(key2).push(key1);
    values.get(key1).push(v[i]);
    values.get(key2).push(1 / v[i]);
  }
  let res = [];
  // 用来保存遍历过的节点
  let set = new Set();
  for (let i = 0; i < q.length; i++) {
    res[i] = dfs(q[i][0], q[i][1], pairs, values, set, 1);
  }
  return res;
}

function dfs(start, end, pairs, values, set, value) {
  // 当前节点遍历过，或者当前节点不存在
  if (set.has(start) || !pairs.has(start)) return -1;
  // 遍历得到节点了
  if (start === end) return value;
  // 将当前节点放入已访问过的节点中
  set.add(start);

  let list1 = pairs.get(start);
  let list2 = values.get(start);
  let tmp = -1;
  for (let i = 0; i < list1.length; i++) {
    tmp = dfs(list1[i], end, pairs, values, set, value * list2[i]);
    if (tmp !== -1) break;
  }
  set.delete(start);
  return tmp;
}

