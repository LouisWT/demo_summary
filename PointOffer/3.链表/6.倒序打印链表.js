// p 58
// 输入一个单向链表头结点
// 倒序打印每个节点的值

const linkList = {
  next: {
    next: {
      next: {
        next: null,
        value: 4
      },
      value: 3
    },
    value: 2
  },
  value: 1
}

// 方法1:
// 用一个栈来保存遍历的值
// 时间复杂度o(n)
// 空间复杂度o(n)
function reversePrint(node) {
  const stack = new Array();
  while(node != null) {
    stack.push(node.value);
    node = node.next;
  }
  // stack.length 是改变的，不能直接在这上面 for 循环
  const length = stack.length;
  for(let i = 0; i < length; i++) {
    console.log(stack.pop());
  }
}

reversePrint(linkList);

// 方法2:
// 使用递归来输出
// 时间复杂度o(n)
// 空间复杂度o(n)
function newReversePrint(node) {
  if(node != null) {
    if (node.next != null) {
      newReversePrint(node.next);
    }
    console.log(node.value);
  }
}

newReversePrint(linkList);