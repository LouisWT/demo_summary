function judge(node) {
  if (!node) return true;
  let mid = getMid(node);
  mid = reverse(mid);
  while (mid) {
    if (node.val !== mid.val) {
      return false;
    }
    node = node.next;
    mid = mid.next;
  }
  return true;
}

// 获取中间的节点
// 如果是偶数的节点，这个获取的是后面的节点
// [1, 2, 3, 4, 5, 6]这里获得的是4
function getMid(node) {
  let slow = node;
  let fast = node;
  // 用以下方式获得偶数节点前面的节点，也就是 [1, 2, 3, 4, 5, 6]这里获得的是3
  // while(fase && fast.next && fast.next.next)
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

// 翻转链表
function reverse(node) {
  if (!node) return null;
  let prev = null;
  let curr = node;
  let next = node.next;
  while (next) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
  }
  curr.next = prev;
  return curr;
}