/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  let res;
  if (l1.val > l2.val) {
    res = l2;
    res.next = mergeTwoLists(l1, l2.next);
  } else {
    res = l1;
    res.next = mergeTwoLists(l1.next, l2);
  }
  return res;
};

