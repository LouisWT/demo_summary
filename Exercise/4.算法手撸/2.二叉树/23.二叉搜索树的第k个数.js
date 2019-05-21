function kthNum(node, k) {
  if (!node || k <= 0) return null
  let temp = [];
  let count = 0;
  while (node || temp.length > 0) {
    while (node) {
      temp.push(node);
      node = node.left;
    }
    if (temp.length > 0) {
      node = temp.pop();
      count++;
      if (count == k) {
        return node.val;
      }
      node = node.right;
    }
  }
  return null;
}