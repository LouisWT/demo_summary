// p193 **
// 输入一个二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新节点

function Convert(pRootOfTree) {
  if (!pRootOfTree) return null;
  // 利用数组传递的是引用的特点来传递中序遍历的前一个节点
  let lastNode = [null];
  convertNode(pRootOfTree, lastNode);
  let firstNode = lastNode[0];
  while (firstNode.left) {
    firstNode = firstNode.left;
  }
  return firstNode;
}

function convertNode(pNode, prevNode) {
  if (!pNode) return;
  convertNode(pNode.left, prevNode);
  // 将当前节点与前一节点连接
  pNode.left = prevNode[0];
  // 一开始前一节点为 null
  if (prevNode[0]) prevNode[0].right = pNode;
  // 替换前一节点为当前节点
  prevNode[0] = pNode;
  convertNode(pNode.right, prevNode);
}

module.exports = {
  Convert: Convert
};
