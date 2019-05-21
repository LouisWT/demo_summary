/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
// https://leetcode.com/problems/sort-list/discuss/46712/Bottom-to-up(not-recurring)-with-o(1)-space-complextity-and-o(nlgn)-time-complextity
// 自底向上的 merge sort
var sortList = function(head) {
  if (!head || !head.next) return head;
  let curr = head;
  let length = 1;
  while (curr.next) {
    curr = curr.next;
    length++;
  }
  // 保存头节点
  let dummy = new ListNode(0);
  dummy.next = head;
  for (let step = 1; step < length; step*=2) {
    let curr = dummy.next;
    let tail = dummy;
    while(curr) {
      let left = curr;
      // 返回从 left 后 step 步的节点
      let right = split(left, step);
      // 挪到新的节点，先挪再 merge
      curr = split(right, step);
      // 以 tail 为头节点，将 left 和 right merge，并返回新的 tail
      tail = merge(left, right, tail);
    }
  }
  return dummy.next;
};

function split(head, n) {
  for (let i = 1; head && i < n; i++) {
    head = head.next;
  }
  if (!head) return null;
  let second = head.next;
  head.next = null;
  return second;
}

function merge(l1, l2, head) {
  let curr = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    } else {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    }
  }
  curr.next = l1 ? l1 : l2;
  while (curr.next) curr = curr.next;
  return curr;
}