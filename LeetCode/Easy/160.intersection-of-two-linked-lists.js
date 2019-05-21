/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);
  let sub = Math.abs(lengthA - lengthB);
  let node1 = lengthA > lengthB ? headA : headB;
  let node2 = lengthA > lengthB ? headB : headA;
  while (sub > 0) {
    node1 = node1.next;
    sub--;
  }
  while (node1 !== node2) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1;
};

function getLength(node) {
  let count = 1;
  while (node.next) {
    node = node.next;
    count++;
  }
  return count;
}
