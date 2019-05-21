/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (34.14%)
 * Total Accepted:    378.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
 * 
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) return null;
  let length = 1;
  let node = head;
  while (node.next) {
    node = node.next;
    length++;
  }
  // n 大于 length ,说明长度不够,不用删
  if (n > length) {
    return head;
  }
  // n == length,说明删第一个节点
  if (n === length) {
    head = head.next;
    return head;
  }
  if (n < length) {
    let count = 1;
    node = head;
    while (count < length - n) {
      node = node.next;
      count++;
    }
    let next = node.next;
    if (!next) node.next = null;
    else node.next = next.next;
    return head;
  }
};

