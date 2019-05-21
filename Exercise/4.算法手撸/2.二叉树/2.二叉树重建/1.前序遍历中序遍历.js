function buildTree(pre, mid) {
  if (pre.length === 0 || mid.length === 0) return null;
  let val = pre[0];
  let root = { val };
  let index = mid.indexOf(val);
  let leftMid = mid.slice(0, index);
  let rightMid = mid.slice(index + 1);
  let leftPre = pre.slice(1, leftMid.length + 1);
  let rightPre = pre.slice(leftMid.length + 1);
  root.left = buildTree(leftPre, leftMid);
  root.right = buildTree(rightPre, rightMid);
  return root;
}
rebuild([1, 2, 3], [2, 1, 3])