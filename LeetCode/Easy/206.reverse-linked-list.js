/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function(head) {
  if (!head) return null;
  let prev = null;
  let curr = head;
  let next = head.next;
  while (next) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
  }
  curr.next = prev;
  return curr;
};

// 2. 递归法
function reverseList(head) {
  if (!head) return null;
  if (!head.next) return head;
  let next = head.next;
  head.next = null;
  next = reverseList(next);
  let newHead = next;
  while (next.next) {
    next = next.next;
  }
  next.next = head;
  return newHead;
}

