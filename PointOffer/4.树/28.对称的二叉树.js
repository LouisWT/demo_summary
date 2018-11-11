// p159
// 判断一个树是否是对称的，如果它和它镜像一样，就是对称的

// 根左右的遍历结果 如果和 根右左的遍历结果相同，说明是对称的
// 如果所有元素相同，那么怎样遍历都一样，所以要考虑 null 节点，这样即使元素一样，出现的位置也不一样
function isSymmetrical(pRoot) {
    if (!pRoot) return true;
    const arr1 = [];
    const arr2 = [];
    searchLeftRight(pRoot, arr1);
    searchRightLeft(pRoot, arr2);
    let flag = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            flag = false;
            break;
        }
    }
    return flag;
}

function searchLeftRight(pRoot, arr) {
    if (!pRoot) {
        arr.push(null);
        return;
    }
    arr.push(pRoot.val);
    searchLeftRight(pRoot.left, arr)
    searchLeftRight(pRoot.right, arr);
    return;
}

function searchRightLeft(pRoot, arr) {
    if (!pRoot) {
        arr.push(null);
        return;
    }
    arr.push(pRoot.val);
    searchRightLeft(pRoot.right, arr)
    searchRightLeft(pRoot.left, arr);
    return;
}

// 书上解法
function isSymmetrical(pRoot) {
    return checkSymmetrical(pRoot, pRoot);
}

function checkSymmetrical(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val != root2.val) return false;
    return checkSymmetrical(root1.left, root2.right) && checkSymmetrical(root1.right, root2.left);
}

module.exports = {
    isSymmetrical: isSymmetrical
};