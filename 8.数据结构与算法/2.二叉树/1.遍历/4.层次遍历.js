// 一层一层的遍历

// 非递归方法适合整个树的层次遍历
// 使用一个队列记录遍历的节点，可以自然的实现层次遍历
function levelSearch(root) {
  if (!root) return;
  const temp = [root];
  search(temp);
}

function search(quene) {
  while (quene.length > 0) {
    let node = quene.shift();
    console.log(node.val);
    if (node.left) {
      quene.push(node.left);
    }
    if (node.right) {
      quene.push(node.right);
    }
  }
}

// 递归方法适合实现只打印第 n 层节点
// 使用 level 来记录当前是第几层
function levelSearchN(root, n) {
  if (!root || level < 0) return 0;
  searchN(root, n, 0);
}

function searchN(node, n, level) {
  if (!node) return;
  if (level == n) {
    console.log(node.val);
  } else {
    searchN(root.left, n, level + 1);
    searchN(root.right, n, level + 1);
  }
}