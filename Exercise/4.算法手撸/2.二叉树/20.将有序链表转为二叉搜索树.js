function sortedListToBST(list) {
  if (!list) return null;
  return convert(list, null);
}

function convert(head, tail) {
  if (!head || head === tail) return null;
  let fast = head;
  let slow = head;
  // 找到中间的节点
  while(fast !== tail && fast.next !== tail) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let node = { val: slow.val };
  node.left = convert(head, slow);
  node.right = convert(slow.next, tail);
  return node;
}