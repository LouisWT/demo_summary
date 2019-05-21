/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head) return false;
  let slow = head;
  let fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next;
    if (!fast) break;
    fast = fast.next;
    if (slow === fast) break;
  }
  if (slow && slow === fast) return true;
  return false;
};

