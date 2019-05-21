 function flatten(node) {
  if (!node) return null;
  let tmp = node.right;
  node.right = flatten(node.left);
  node.left = null;
  let tail = node;
  while(tail.right !== null) {
      tail = tail.right;
  }
  tail.right = flatten(tmp);
  return node;
};