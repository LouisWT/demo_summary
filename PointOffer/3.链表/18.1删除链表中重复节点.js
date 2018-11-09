// p122
// 在一个排序链表中删除重复节点

// 开始和结尾有重复的用例
let node4 = {
  value: 1,
  next: null,
};

let node3 = {
  value: 1,
  next: node4,
};

let node2 = {
  value: 1,
  next: node3,
};

let node1 = {
  value: 0,
  next: node2,
}

let root = {
  value: 0,
  next: node1,
};

function deleteDupNode(root) {
  if(!root) return;
  let currentNode = root;
  // 当最后一个节点是重复节点, currentNode 最后是 null
  while (currentNode && currentNode.next) {
    let nextNode = currentNode.next;
    // 当最后一个节点是重复节点， nextNode 最后为 null
    while(nextNode && nextNode.value == currentNode.value) {
      nextNode = nextNode.next;
    }
    if (nextNode !== currentNode.next) {
      currentNode.next = nextNode;
    }
    currentNode = currentNode.next;
  }
}

deleteDupNode(root);

// 全部重复的用例
node4 = {
  value: 1,
  next: null,
};

node3 = {
  value: 1,
  next: node4,
};

node2 = {
  value: 1,
  next: node3,
};

node1 = {
  value: 1,
  next: node2,
}

root = {
  value: 1,
  next: node1,
};

deleteDupNode(root);