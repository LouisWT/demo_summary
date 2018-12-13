// p253 
// 输入两个链表，找出它们的第一个公共节点
// 链表节点有 value 值和 next 指针

// 关键在于单向链表一旦有公共节点，那么公共节点之后的左右节点都是一样的
function findPublicNode(list1, list2) {
  if (!list1 || !list2) { return null; }
  // 获取两个链表的长度
  let count1 = 0;
  let node1 = list1;
  while(node1) {
    count1++;
    node1 = node1.next;
  }
  let count2 = 0;
  let node2 = list2;
  while(node2) {
    count2++;
    node2 = node2.next;
  }
  let minus = count1 - count2;
  node1 = list1;
  node2 = list2;
  while(minus != 0) {
    // 第一个比较长
    if (minus > 0) {
      node1 = node1.next;
      minus--;
    }
    // 第二个比较长
    if (minus < 0) {
      node2 = node2.next;
      minus++;
    }
  }
  while (node1 !== node2) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1;
}