// 递归, 左右根
function backSearch(node) {
  if (!node) return;
  backSearch(node.left);
  backSearch(node.right);
  console.log(node.val);
}

// 非递归
// 要保证根节点在左右孩子访问之后才能访问，因此对于任一节点 P，先将其入栈，
// 如果 P 不存在左孩子和右孩子。则直接访问它
// 如果 P 存在左孩子和右孩子但是已经访问过了，那么直接访问它
// 否则将 P 的右孩子左孩子依次入栈，这样就可以保证左孩子在右孩子前面被访问

function backSearch2(node) {
  if (!node) return;
  const temp = [];
  search(node, temp);
}

function search(root, stack) {
  stack.push(root);
  let cur;
  let pre = null;
  while(stack.length > 0) {
    cur = stack[stack.length - 1];
    // 在三种情况下输出当前节点
    // 1. 左右孩子为 null
    // 2. 左孩子刚被输出，并且没有右孩子
    // 3. 右孩子刚被输出
    if ((!cur.left && !cur.right) || (pre != null && ((pre == cur.left && cur.right == null) || pre == cur.right))) {
      console.log(cur.val);
      stack.pop();
      pre = cur;
    }
    if (cur.right) {
      stack.push(right);
    }
    if (cur.left) {
      stack.push(left);
    }
  }
}