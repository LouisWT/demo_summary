// 左根右
function MFS(node) {
  if (!node) return;
  MFS(node.left);
  console.log(node.val);
  MFS(node.right);
}

function MFS2(node) {
  if (!node) return;
  let temp = [];
  while (node || temp.length > 0) {
    // 由于是中序遍历，所以先找最左子节点
    while(node) {
      temp.push(node);
      node = node.left;
    }
    // 先打印节点，然后访问右节点
    if (temp.length > 0) {
      node = temp.pop();
      console.log(node.val);
      node = node.right;    
    }
  }
}