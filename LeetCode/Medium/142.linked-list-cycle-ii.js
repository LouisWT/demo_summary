/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
// 假设环的节点前有 A 个节点，慢指针走到 A + B 这个位置和快指针相遇
// 那么这是快指针走了 2(A + B) 步（因为它一次走两步）
// 假设环的大小是 N
// 由于快指针套了慢指针一圈，所以快指针走的步数也可以用  A + B + N 来表示
// 所以 A + B + N = 2(A + B)
// N = A + B
// 因此 slow 指针停止的位置，刚好领先 head 指针 N - 1步，因此只需要两个指针一起走，直到相遇
// 最终就是环的起点
var detectCycle = function(head) {
  if (!head) return null;
  // 快慢指针找到环中的某个节点
  let slow = head;
  let fast = head;
  while (fast && slow) {
    slow = slow.next;
    fast = fast.next;
    if (!fast) break;
    fast = fast.next;
    if (fast === slow) break;
  }
  if (!fast) return null;
  // 求环的起始节点
  fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

