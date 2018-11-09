// p134
// 输入一个单向链表，输出该链表第 k 个节点

// 定义两个节点，两个节点中间差 k - 2 个，当一个节点走到最后一个节点时，另一个节点就在第 k 个节点
function FindKthToTail(head, k) {
  // null 指针或者 k 不是正整数
  if (!head || k <= 0) return;
  let first = head;
  let behind = head;
  for (let i = 0; i < k - 1; i++) {
    // 不够 k 个节点
    if (!first.next) {
      return;
    } else {
      first = first.next;
    }
  }
  while (first.next) {
    first = first.next;
    behind = behind.next;
  }
  return behind;
}

module.exports = {
  FindKthToTail: FindKthToTail
};

// 求链表中间节点，思路一样，只是一个节点一次走两步，一个节点一次走一步