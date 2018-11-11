// p148
// 输入两棵二叉树，判断第二个树是否为第一棵树的子树

function HasSubtree(pRoot1, pRoot2) {
    if (!pRoot1 || !pRoot2) return false;
    return checkSubtree(pRoot1, pRoot2);
}

function checkSubtree(pRoot1, pRoot2) {
    // 1. 如果子树节点没了，说明都匹配了
    if (!pRoot2) return true;
    // 2. 子树节点还有，如果被匹配树节点没了，说明匹配不了
    if (!pRoot1) return false;
    // 3 如果当前节点匹配了，并且左右也都匹配
    if (pRoot1.val == pRoot2.val && checkSubtree(pRoot1.left, pRoot2.left) && checkSubtree(pRoot1.right, pRoot2.right)) {
        return true;
    }
    // 4. 用左右子树匹配整个子树
    else {
        return checkSubtree(pRoot1.left, pRoot2) || checkSubtree(pRoot1.right, pRoot2);
    }
}

module.exports = {
    HasSubtree: HasSubtree
};