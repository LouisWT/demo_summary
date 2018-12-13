// p273
// 平衡二叉树中任意节点的左右子树深度相差不超过1
// 判断一棵树是否为平衡二叉树

function getBalance(root) {
  if (!root) return true;
  return checkNode(root);
}

// 1. 方法一时间效率不高，因为一个节点会被遍历多次
function checkNode(node) {
  const leftDepth = node.left ? depth(node.left) : 0;
  const rightDepth = node.right ? depth(node.right) : 0;
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  } else {
    let left = true;
    let right = true;
    if (node.left) left = checkNode(node.left);
    if (node.right) right = checkNode(node.right);
    return left && right;
  }
}

function depth(node) {
  let curDepth = 1;
  const leftDepth = node.left ? depth(node.left) : 0;
  const rightDepth = node.right ? depth(node.right) : 0;
  return curDepth + Math.max(leftDepth, rightDepth);
}

// 2. 方法二 p272
function isBalanced(root) {
  if (!root) {
    return true;
  }
  return checkBalanced(root, { depth: 0 });
}

function checkBalanced(node, Dep) {
  if (node === null) {
    Dep.depth = 0;
    return true;
  }
  let leftDep = { depth: 0 };
  let rightDep = { depth: 0 };
  if (checkBalanced(node.left, leftDep) && checkBalanced(node.right, rightDep)) {
    if (Math.abs(leftDep.depth - rightDep.depth) <= 1) {
      Dep.depth = Math.max(leftDep.depth, rightDep.depth) + 1;
      return true;
    }
  }
  return false;
}