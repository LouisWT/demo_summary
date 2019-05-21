/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || k === 0) return head;
  let length = getLength(head);
  if (k >= length) k = k % length;
  if (k === 0) return head;
  let node = findKNode(head, length - k, 1);
  let newHead = node.next;
  node.next = null;
  let tail = findTail(newHead);
  tail.next = head;
  return newHead;
};

function getLength(head) {
  let count = 1;
  while(head.next) {
    count++;
    head = head.next;
  }
  return count;
}

function findKNode(head, k, count) {
  if (count === k) return head;
  return findKNode(head.next, k, count + 1);
}

function findTail(head) {
  while (head.next) head = head.next;
  return head;
}
