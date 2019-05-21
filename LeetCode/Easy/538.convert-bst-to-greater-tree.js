/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) return null;
  convert(root, 0);
  return root;
};

function convert(node, plus) {
  let right = plus;
  if (node.right) right = convert(node.right, plus);
  // 这时返回的right，已经包括了 plus，所以不需要重复加
  node.val += right;
  let total = node.val;
  if (node.left) total = convert(node.left, node.val);
  return total;
}

