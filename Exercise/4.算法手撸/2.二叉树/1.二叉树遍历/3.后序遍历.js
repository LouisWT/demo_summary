function BFS(node) {
  if (!node) return;
  BFS(node.left);
  BFS(node.right);
  console.log(node.val);
}

function BFS2(node) {
  if (!node) return;
  let temp = [node];
  let prev = null;
  let curr = null;
  while(temp.length > 0) {
    // 取栈顶元素
    curr = temp[temp.length - 1];
    if (
      // 如果左右孩子都是 null
      (!curr.left && !curr.right) ||
      // 排除最开始的情况
      (prev !== null &&
        // 刚刚打印左子节点，并且没有右孩子
        // 或者刚刚打印右子节点
        (
          (curr.left === prev && curr.right === null) ||
          curr.right === prev
        )
      )
    ) {
      console.log(curr.val);
      temp.pop();
      prev = curr;
    }
    // 先添加右孩子
    if (curr.right) {
      temp.push(curr.right);
    }
    // 再添加左孩子
    if (curr.left) {
      temp.push(curr.left);
    }
  }
}