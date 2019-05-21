function res(node) {
  if (!node) return;
  let lastNode = [null];
  convert(node, lastNode);
  let firstNode = lastNode[1];
  return firstNode;
}

function convert(node, prevNode) {
  if(!node) return;
  convert(node.left, prevNode);
  let prev = prevNode[0];
  node.left = prev;
  if (prev) {
    prev.right = node;
  }
  else {
    prevNode[1] = node;
  }
  prevNode[0] = node;
  convert(node.right, prevNode);
}


function res(node) {
  if(!node) return null;
  let temp = [];
  let prev = null;
  let first = null;
  while (node || temp.length > 0) {
    while(node) {
      temp.push(node);
      node = node.left;
    }
    if (temp.length > 0) {
      node = temp.pop();
      node.left = prev;
      if (prev) {
        prev.right = node;
      } else {
        first = node;
      }
      prev = node;
      node = node.right;
    }
  }
  return first;
}