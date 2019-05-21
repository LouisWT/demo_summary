/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var rob = function(root) {
//   if (!root) return 0;
//   let rob = search(root, true);
//   return rob;
// };

// function search(node, can) {
//   if (!node) return 0;
//   let rob = node.val;
//   let notRob = 0;
//   notRob += search(node.left, true);
//   notRob += search(node.right, true);
//   if (!can) return notRob;
//   rob += search(node.left, false);
//   rob += search(node.right, false);
//   return Math.max(rob, notRob);
// }

// 每个节点有两种情况,抢与不抢
// 如果当前节点抢的话,那么它的子节点一定不能抢
// 如果当前节点不抢,那么它的子节点可以抢也可以不抢

// 每个节点都返回一个两元素的数组
// 元素0表示抢当前节点得到的钱
// 元素1表示不抢当前节点得到的钱
function rob(root) {
  let nums = dfs(root);
  return Math.max(nums[0], nums[1]);
}

function dfs(node) {
  if (!node) return [0, 0];
  let left = dfs(node.left);
  let right = dfs(node.right);
  let res = [];
  res[0] = left[1] + right[1] + node.val;
  res[1] = Math.max(...left) + Math.max(...right);
  return res;
}

