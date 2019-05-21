function getPath(node, N) {
  if (!node) return;
  let allPath = [];
  get(node, 0, N, [], allPath);
  return allPath;
}

function get(node, sum, N,  path, allPath) {
  if (!node) return;
  if (node.val + sum === N) {
    path.push(node.val);      
    if (!node.left && !node.right) {
      allPath.push([...path]);
    }
  } else if (node.val + sum < N) {
    path.push(node.val);
  } else {
    return;
  }
  get(node.left, sum + node.val, N, path, allPath);
  get(node.right, sum + node.val, N, path, allPath);
  path.pop();
}

// 是否有
function hasPathSum(root, sum) {
  if (!root) return false;
  let res = sum - root.val;
  if (!root.left && !root.right && res == 0) {
      return true;
  }
  return hasPathSum(root.left, res) || hasPathSum(root.right, res)
};