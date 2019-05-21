/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 思路与翻转链表类似，也是使用 prev curr next 三个指针，prev 表示前一对节点的后面那个节点，curr 表示当前节点，next 表示与当前节点一对的下一节点
 * prev 最开始为 null，curr 最开始为 第一个节点，next 最开始为 curr.next
 * 将 curr 与 next 交换
 * 如果 prev 有值，那么存在上一节点，那么 prev.next = next，来连起来，(这里curr 与 prev 已经交换了，所以 next 在前面)
 * 更新三个指针
 * prev = curr
 * curr = curr.next
 * next = curr.next
 * @param {LinkedListNode} head
 */
var swapPairs = function(head) {
  if (!head) return null;
  // 新的头其实是确定的，如果只有一个节点，那么就是 head，如果有多个节点，那么一定是 head.next
  let currHead = head.next ? head.next : head;
  let prev = null;
  let curr = head;
  let next = curr.next;
  while (curr && next) {
    curr.next = next.next;
    next.next = curr;
    if (prev) prev.next = next;
    prev = curr;
    curr = curr.next;
    if (!curr) break;
    next = curr.next;
  }
  return currHead;
};

