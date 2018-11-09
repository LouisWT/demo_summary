// p119
// 在 o(1) 时间内删除链表节点

let node4 = {
  value: 4,
  next: null,
};

let node3 = {
  value: 3,
  next: node4,
};

let node2 = {
  value: 2,
  next: node3,
};

let node1 = {
  value: 1,
  next: node2,
}

let root = {
  value: 0,
  next: node1,
};

// 考虑只有一个节点和删除节点是尾节点的特殊情况很重要
function deleteNode(root, node) {
  // 节点不能为 null
  if (!root && !node) return;
  // 删除的节点不是尾节点
  // 直接将下一个节点的值复制到当前节点
  if (node.next) {
    const nextNode = node.next;
    node.value = nextNode.value;
    node.next = nextNode.next;
  }
  // 是尾节点也是头节点，说明只有一个节点
  // 将 root 置为 null
  else if (root == node) {
    root = null;
  }
  // 是尾节点，需要从头遍历
  else {
    let nextNode = root;
    while (nextNode.next !== node) {
      nextNode = nextNode.next;
    }
    nextNode.next = null;
  }
}

deleteNode(root, node2);
deleteNode(root, node4);
deleteNode(root, root);

root = {
  value: 0,
  next: null,
}

deleteNode(root, root);