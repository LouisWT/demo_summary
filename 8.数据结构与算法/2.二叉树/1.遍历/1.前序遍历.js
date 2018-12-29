// 前序遍历就是根左右的顺序

// 递归实现
function frontSearch(node) {
  if (!node) return;
  console.log(node.val);
  frontSearch(node.left);
  frontSearch(node.right);
}

// 非递归实现
// 对于任一节点 P
// - 访问节点 P，并将节点P 入栈
// - 判断节点P的左孩子是否为空，若不为空，则将左孩子入栈，并将当前节点置为左孩子，若为空，那么将栈顶元素出栈，将当前节点设为栈顶元素的右孩子
// - 直到 P 为 null 且栈为空
function frontSearch2(root) {
  if (!root) return;
  const temp = [];
  search(root, temp)
}

function search(node, temp) {
  while(node || temp.length !== 0) {
    while(node != null) {
      console.log(node.val);
      temp.push(node);
      node = node.left;
    }

    if (temp.length > 0) {
      node = temp.pop();
      node = node.right;
    }
  }
}