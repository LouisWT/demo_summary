// p62 
// 给定前序遍历和中序遍历序列
// 遍历序列中没有重复的数字
// 重建二叉树

const qianArr = [1, 2, 4, 7, 3, 5, 6, 8];
const zhongArr = [4, 7, 2, 1, 5, 3, 8, 6]

// 方法
// 前序遍历的第一个数字一定是树的根节点，中序遍历中根节点的左边是树的左子树，右边是树的右子树，这样就可以递归的创建一棵树
function rebuildTree(fArr, mArr) {
    if (!fArr || !mArr) {
        return;
    }
    if (fArr.length === 0 && mArr.length === 0) {
        return;
    }
    const currentNode = { value: fArr[0] };
    // 1. 找到中序遍历中根节点的位置
    const index = mArr.indexOf(fArr[0]);
    // 2. 将左子树右子树的前序遍历和中序遍历分出来
    const leftMArr = mArr.slice(0, index);
    const rightMArr = mArr.slice(index + 1);
    const leftFArr = fArr.slice(1, index + 1);
    const rightFArr = fArr.slice(index + 1);
    // 3. 递归地创建
    currentNode.left = rebuildTree(leftFArr, leftMArr);
    currentNode.right = rebuildTree(rightFArr, rightMArr);
    return currentNode;
}

const tree = rebuildTree(qianArr, zhongArr);
console.log(tree);
