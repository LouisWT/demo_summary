/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
// head 是当前节点, kNode 是 head 之后的第 k 个节点
// next 表示第 k + 1 个节点，也就是下一段的开头
// 翻转当前段，翻转后头是 kNode，尾是 head
// head.next 指向下一段翻转后的头
var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head;
  let kNode = getKNode(head, k);
  if (!kNode) return head;
  let next = kNode.next;
  let res = kNode;
  reverse(head, kNode);
  head.next = reverseKGroup(next, k);
  return res;
};

function getKNode(node, k) {
  if(!node) return null;
  let count = 1;
  while (node.next && count < k) {
    node = node.next;
    count++;
  }
  if (count < k) return null;
  return node;
}

function reverse(node, kNode) {
  let prev = null;
  let curr = node;
  let next = curr.next;
  while (curr !== kNode) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
  }
  curr.next = prev;
}

