// p271
// 二叉树的深度，输入根节点，求树的深度
// 从根节点到叶节点，最长路径的长度就是树的深度

function getDepth(root) {
  if (!root) return 0;
  return depth(root);
}

function depth(node) {
  let curDepth = 1;
  const leftDepth = node.left ? depth(node.left) : 0;
  const rightDepth = node.right ? depth(node.right) : 0;
  return curDepth + Math.max(leftDepth, rightDepth);
}