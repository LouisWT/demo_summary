function connect(node) {
  if (!node) return null;
  let prev = node;
  let curr = null;
  while (prev.left) {
    curr = prev;
    // 连接下一层所有节点
    while (curr) {
      curr.left.next = curr.right;
      if (curr.next) curr.right.next = curr.next.left;
      curr = curr.next;
    }
    // 进入下一层
    prev = prev.left;
  }
  return node;
}

// 对于非完全二叉树
function connect(node) {
  if (!node) return null;
  let curr = node;
  let head = null;
  let prev = null;
  while (curr) {
    while (curr) {
      if (curr.left) {
        if (!prev) head = curr.left;
        else prev.next = curr.left;
        prev = curr.left;
      }
      if (curr.right) {
        if (!prev) head = curr.right;
        else prev.next = curr.right;
        prev = curr.right;
      }
      curr = curr.next;
    }
    curr = head;
    head = null;
    prev = null;
  }
  return node;
}

function connect(root) {
  if (!root) return null;
  let res = [];
  calc(root, 0, res);
  return root;
};

function calc(node, level, res) {
  if (!node) return null;
  if (!res[level]) {
    res[level] = node;
  } else {
    let prev = res[level];
    prev.next = node;
    res[level] = node;
  }
  calc(node.left, level + 1, res);
  calc(node.right, level + 1, res);
}

