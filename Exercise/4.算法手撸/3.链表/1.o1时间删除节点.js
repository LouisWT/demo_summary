// 给定一个头指针和一个要删除的节点，删除给定节点

function deleteNode(head, node) { 
  if(!head || !node) return null;
  // 不是尾节点，那么用后面的节点覆盖当前节点
  // 并删除后一节点
  if(node.next) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
  // 如果只有一个节点
  else if (head == node) {
    head = null;
  }
  // 如果删除的节点时尾节点，老老实实删除
  else {
    let curr = head;
    // 找node的前一个
    while(curr.next != node) {
      curr = curr.next;
    }
    curr.next = null;
  }
  return head;
}