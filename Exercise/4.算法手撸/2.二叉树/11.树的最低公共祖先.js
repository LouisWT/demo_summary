function lowestCommonAncestor(root, node1, node2) {
  if (!root) return null;
  let path1 = [];
  let path2 = [];
  findPath(root, node1, [], path1);
  findPath(root, node2, [], path2);
  path1 = path1[0]
  path2 = path2[0]
  let result = null;
  for(let i = 0; i < Math.min(path1.length, path2.length); i++) {
    if (path1[i] === path2[i]) {
      result = path1[i];
    }
  }
  return result;
}

function findPath(root, node, tmp, path) {
  if (root == null) return;
  if (root == node) {
    tmp.push(root);
    path.push([...tmp]);
    return;
  }
  tmp.push(root);
  findPath(root.left, node, tmp, path);
  findPath(root.right, node, tmp, path);
  tmp.pop();
}

function lowestCommonAncestor(root, p, q) {
  if (!root || p == root || q == root) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left ? left : right;
}

// 二叉搜索树的最低公共祖先
function lowestCommonAncestor(root, node1, node2) {
  if (!root || !node1 || !node2) return null;
  // 等于是因为某个节点可能是等于当前节点
  let left = root.val <= Math.max(node1.val, node2.val);
  let right = root.val >= Math.min(node1.val, node2.val)
  if (left && right) {
    return root;
  } else if (root.val > Math.max(node1.val, node2.val)) {
    return lowestCommonAncestor(root.left, node1, node2);
  } else if (root.val < Math.min(node1.val, node2.val)) {
    return lowestCommonAncestor(root.right, node1, node2);
  }
  return null;
}