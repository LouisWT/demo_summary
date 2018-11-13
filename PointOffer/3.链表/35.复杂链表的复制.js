// p 187 **
// 复制一个复杂链表，复杂链表除了有 next 指针，还有一个 random 指针指向任意节点

function ListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}

function Clone(pHead) {
  if (!pHead) return null;
  CloneNode(pHead);
  ConnnectSiblingNodes(pHead);
  return ReconnectNodes(pHead);
}

// 1. 将每个新节点加在每个旧节点后面
function CloneNode(pHead) {
  let node = pHead;
  while (node) {
    const val = node.label;
    const newNode = new ListNode(val);
    newNode.next = node.next;
    node.next = newNode;
    node = newNode.next;
  }
}

// 2. 每个旧节点的random 的后一节点 就是每个新节点 random 应该指向的节点
function ConnnectSiblingNodes(pHead) {
  let node = pHead;
  while (node) {
    const newNode = node.next;
    if (node.random) {
      newNode.random = node.random.next;
    }
    node = newNode.next;
  }
}

// 3. 将新旧节点分开
function ReconnectNodes(pHead) {
  let node = pHead;
  let newHead;
  let newNode;
  // 3.1 初始化新节点的头
  if (node) {
    newHead = newNode = node.next;
    node.next = newNode.next;
    node = node.next;
  }
  // 3.2 将新旧节点分开
  while (node) {
    newNode.next = node.next;
    newNode = newNode.next;
    node.next = newNode.next;
    node = node.next;
  }
  return newHead;
}

module.exports = {
  Clone: Clone
};