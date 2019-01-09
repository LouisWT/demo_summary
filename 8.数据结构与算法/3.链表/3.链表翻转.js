// 给出一个链表和一个数k，比如，链表为1→2→3→4→5→6，k=2，则翻转后2→1→6→5→4→3，若k=3，翻转后3→2→1→6→5→4，若k=4，翻转后4→3→2→1→6→5

const LinkedList = require('./1.单向链表');
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
let head = list.getHead();

// 翻转链表
function shiftLinkedList(head, m) {
  if (!head || m < 0) return null;
  let head1 = head;
  let temp = head;
  let count = 1;
  while (count < m) {
    temp = temp.next;
    count++;
  }
  let head2 = temp.next;
  temp.next = null;
  head1 = reverse(head1);
  head2 = reverse(head2);
  let curr = head1;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = head2;
  return head1;
}

// 反转链表
function reverse(node) {
  if (!node) return null;
  // 1.如果是最后一个节点，直接返回
  if (!node.next) return node;
  // 2.将当前节点之后的节点，全部反转
  let temp = reverse(node.next);
  // 3.找到反转节点的最后一个节点
  let endOfTemp = temp;
  while (endOfTemp.next) {
    endOfTemp = endOfTemp.next;
  }
  // 4.将当前节点放到最后一个节点后面
  node.next = null;
  endOfTemp.next = node;
  // 5. 将反转后的链表的首节点返回
  return temp;
}

head = shiftLinkedList(head, 2);

console.log(head);