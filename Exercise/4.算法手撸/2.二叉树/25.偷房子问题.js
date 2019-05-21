// 当前节点可能被偷，也可能没有被偷
// 如果被偷了，那么子节点就不能偷
// 如果没有被偷，那么子节点可能被偷也可能没有被偷
function rob(root) {
  if(!root) return 0;
  let res = calc(root);
  return Math.max(res[0], res[1]);
}

function calc(root) {
  if (!root) return [0, 0];
  let left = calc(root.left);
  let right = calc(root.right);
  let res = [0, 0];
  // 表示当前节点被偷了，那么子节点不能被偷
  res[0] = root.val + left[1] + right[1];
  // 表示当前节点没有被偷，那么子节点可能偷或者没偷
  res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  return res;
}