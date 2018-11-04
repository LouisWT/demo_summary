// p65
// 给定一棵二叉树，和其中一个节点
// 树中的节点除了左右节点的指针，还有指向父节点的指针
// 找出中序遍历的下一个节点

// 方法:
// 分类讨论: 1) 如果给定节点有右子树，那么下一个节点就是它的右子树的最左子节点
// 2) 如果给定节点没有右子树，但是是父节点的左节点，那么下一个节点就是它的父节点
// 3) 如果给定节点没有右子树，并且是父节点的右节点,那么就向上查找，直到找到某个节点是它父节点的左节点，那个父节点就是要找的

// JS 中不知道咋定义测试的数据结构
function findNextNode(node) {
    if (!node) {
        return;
    }
    let nextNode;
    if (node.right) {
        nextNode = node.right;
        while (nextNode.left) {
            nextNode = nextNode.left;
        }
    } else if (node.parent && node.parent.left === node) {
        nextNode = node.parent;
    } else {
        nextNode = node.parent;
        currentNode = node;
        while (nextNode && nextNode.left != currentNode) {
            currentNode = nextNode;
            nextNode = nextNode.parent;
        }
    }
    return nextNode;
}