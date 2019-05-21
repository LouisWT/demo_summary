/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
// 递归中序遍历
var inorderTraversal = function(root) {
  if (!root) return [];
  let res = [];
  travel(root, res);
  return res;
};

function travel(node, res) {
  if (!node) return;
  travel(node.left, res);
  res.push(node.val);
  travel(node.right, res);
}

// 循环中序遍历
function inorderTraversal(node) {
  if (!root) return [];
  let res = [];
  let stack = [];
  while (node || stack.length > 0) {
    while(node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length > 0) {
      node = stack.pop();
      res.push(node.val);
      node = node.right;
    }
  }
  return res;
}
