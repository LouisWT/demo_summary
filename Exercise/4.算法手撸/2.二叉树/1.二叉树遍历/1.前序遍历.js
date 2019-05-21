// 根左右
function frontFS(node) {
  if (!node) return;
  console.log(node.val);
  frontFS(node.left);
  frontFS(node.right);
}

function frontFS2(node) {
  if (!node) return;
  let temp = [];
  while(node || temp.length > 0) {
    // 先打印节点，然后不断访问到最左子节点，直到为 null
    while (node) {
      console.log(node.val);
      temp.push(node);
      node = node.left;
    }
    // 如果栈中还有节点，就置节点的右子树
    if (temp.length > 0) {
      node = temp.pop().right;
    }
  }
}