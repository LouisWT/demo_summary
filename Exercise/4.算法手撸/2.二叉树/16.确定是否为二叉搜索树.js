function isValidBST(node) {
  if (!node) return true;
  return judge(node, -Infinity, Infinity);
}

function judge(node, min, max) {
  if (!node) return true;
  if (node.val >= max || node.val <= min) {
    return false;
  }
  return judge(node.left, min, node.val) && judge(node.right, node.val, max);
}