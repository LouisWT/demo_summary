function getDepth(node) {
  if(!node) return 0;
  let curr = 1;
  let left = depth(node.left);
  let right = depth(node.right);
  return curr + Math.max(left, right);
}

function maxDepth (root) {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};

function getDepth2(node) {
  if (!node) return 0;
  let root = { depth: 0 };
  depth(node, root);
  return root.depth;
}

function depth(node, root) {
  if (!node) return;
  let left = {depth: 0};
  let right = {depth: 0};
  depth(node.left, left);
  depth(node.right, right);
  root.depth = 1 + Math.max(left.depth, right,depth);
}

// 二叉树的叶子节点的最小深度
// 如果有一边深度为0，不能直接比较，因为它不是叶子节点
function minDepth(root) {
  if (!root) return 0;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (left === 0 || right === 0) return 1 + left + right;
  return 1 + Math.min(left, right)
};