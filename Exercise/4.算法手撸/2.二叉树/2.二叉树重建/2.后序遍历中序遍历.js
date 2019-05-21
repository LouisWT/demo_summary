function buildTree(mid, back) {
  if (mid.length === 0 || back.length === 0) return null;
  let val = back[back.length - 1];
  let root = { val };
  let index = mid.indexOf(val);
  let leftMid = mid.slice(0, index);
  let rightMid = mid.slice(index + 1);
  let rightBack = back.slice(back.length - rightMid.length - 1, back.length - 1);
  let leftBack = back.slice(0, back.length - rightMid.length - 1);
  root.left = buildTree(leftMid, leftBack);
  root.right = buildTree(rightMid, rightBack);
  return root;
}