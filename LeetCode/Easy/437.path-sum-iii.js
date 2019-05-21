/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} sum
 * @return {number}
 */
// 使用向上归并的思想，从叶子节点将自己的值，左子树的值，右子树的值向上归并
// 中间如果值等于 sum，那么就递增
var pathSum = function(root, sum) {
  if (!root) return 0;
  let total = {val: 0};
  getPath(root, sum, total);
  return total.val;
};

function getPath(node, sum, total) {
  if (node.val === sum) total.val += 1;
  let res = [node.val];
  if (node.left) {
    let left = getPath(node.left, sum, total);
    for (let num of left) {
      if (num + node.val === sum) total.val += 1;
      res.push(num + node.val);
    }
  }
  if (node.right) {
    let right = getPath(node.right, sum, total);
    for (let num of right) {
      if (num + node.val === sum) total.val += 1;
      res.push(num + node.val);
    }
  }
  return res;
}

