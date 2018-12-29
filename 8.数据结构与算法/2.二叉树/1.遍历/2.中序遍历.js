// 中序遍历 左根右

// 递归
function middleSearch(node) {
  if (!node) return;
  middleSearch(node.left);
  console.log(node.val);
  middleSearch(node.right); 
}

// 非递归
function middleSearch2(node) {
  if (!node) return;
  const temp = [];
  search(node, temp);
}

function search(node, stack) {
  while(node || stack.length > 0) {
    while (node != null) {
      stack.push(node.left);
      node = node.left;
    }
    if (stack.lengh > 0) {
      node = stack.pop();
      console.log(node.val);
      node = node.right;
    }
  }
}