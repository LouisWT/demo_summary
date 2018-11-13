// p 179
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果，如果是返回 true，否则返回 false。假设输入数组的任意两个数字都不相同
// 二叉搜索树任意节点的左子节点小于当前节点，右子节点大于当前节点

function VerifySquenceOfBST(sequence) {
  // 1. 对null指针和空数组返回 false
  if (!sequence || sequence.length == 0) return false;
  return verify(sequence, 0, sequence.length - 1);
}

function verify(arr, lo, hi) {
  if (lo >= hi) return true;
  const root = arr[hi];
  let part = lo;
  // 2.找到第一个大于根节点的节点，这应该属于右子树
  while (arr[part] < root) { part++; }
  // 3. 如果右子树中有小于根节点的节点，说明不对
  for (let i = part; i < hi; i++) {
    if (arr[i] < root) return false;
  }
  // 4. 分别验证左子树右子树
  return verify(arr, lo, part - 1) && verify(arr, part, hi - 1);
}

module.exports = {
  VerifySquenceOfBST: VerifySquenceOfBST
};

// 处理二叉树的遍历序列，可以先找到二叉树的根节点，再基于根节点把整棵树的遍历序列拆分成左子树对应的子序列和右子树对于的子序列，再递归的处理这两个子序列