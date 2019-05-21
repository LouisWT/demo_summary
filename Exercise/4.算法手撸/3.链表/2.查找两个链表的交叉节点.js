// 有辅助空间
function findNode(node1, node2) {
  if (!node1 || !node2) return null;
  let stack1 = [];
  let stack2 = [];
  while (node1) {
    stack1.push(node1);
    node1 = node1.next;
  }
  while (node2) {
    stack2.push(node2);
    node2 = node2.next;
  }
  let target = null;
  while (stack1.length > 0 && stack2.length > 0) {
    let n1 = stack1.pop();
    let n2 = stack2.pop();
    if (n1 === n2) target = n1;
    else break;
  }
  return target;
}

// 无辅助空间
function findNode2(node1, node2) {
  if (!node1 || !node2) return null;
  let l1 = 1;
  let l2 = 1;
  let curr1 = node1;
  let curr2 = node2;
  while (curr1.next) {
    curr1 = curr1.next;
    l1++;
  }
  while (curr2.next) {
    curr2 = curr2.next;
    l2++;
  }
  // 没有交叉
  if (curr1 != curr2) {
    return null;
  }
  let k = l1 - l2;
  if (k > 0) {
    while (k > 0) {
      node1 = node1.next;
      k--;
    }
  } else if (k < 0) {
    k = -k;
    while (k > 0) {
      node2 = node2.next;
      k--;
    }
  }
  while (node1 != node2) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1;
}