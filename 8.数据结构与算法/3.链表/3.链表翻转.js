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
  let curr;
  [head, curr] = reverse(head, m);
  curr.next = reverse(curr.next);
}

function reverse(head, m) {
  let prev = head;
  let curr = head.next;
  if (m) {
    let count = 1;
    while (count < m) {
      let temp = curr.next;
      prev.next = temp;
      curr.next = prev;
      prev = curr;
      curr = temp;
      count++;
    }
    return [prev, curr];
  }
}

head = reverse(head, 2);

console.log(head);