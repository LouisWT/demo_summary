/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  let [longest] = getDepth(root, 0);
  return longest;
};

// 每次返回两个值，第一个值表示目前为止找到的最长路径的长度
// 第二个值表示当前节点的子树的最大深度
function getDepth(node, depth) {
  let [left, leftD] = [0, depth];
  let [right, rightD] = [0, depth];
  if (node.left) [left, leftD] = getDepth(node.left, depth + 1);
  if (node.right) [right, rightD] = getDepth(node.right, depth + 1);
  let curr = Math.max(left, right, leftD - depth + rightD  - depth);
  let currD = Math.max (leftD, rightD);
  return [curr, currD]
}
