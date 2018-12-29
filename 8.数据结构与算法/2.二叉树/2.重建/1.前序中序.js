// 输入二叉树的前序遍历和中序遍历结果，重建出二叉树

function rebuildTree(fstr, mstr) {
  if (!fstr || !mstr) return null;
  return rebuild(fstr.split(','), mstr.split(','));
}

function rebuild(farr, marr) {
  if (farr.length === 0 || marr.length === 0) return null;
  let node = {};
  // 1. 取出前序序列的第一个，这是根节点
  let val = farr[0];
  node.val = val;
  let index = marr.indexOf(val);
  // 2. 在中序序列中找到根节点，根节点之前的是左子树的中序序列，之后的是右子树的中序序列
  let leftMarr =  marr.slice(0, index);
  let rightMarr = marr.slice(index + 1);
  // 3. 根据左子树的中序序列节点数将左子树的前序序列也找到
  let leftFarr = farr.slice(1, 1 + leftMarr.length);
  // 4. 前序序列剩下的就是右子树的前序序列
  let rightFarr = farr.slice(1 + leftMarr.length);
  node.left = rebuild(leftFarr, leftMarr);
  node.right = rebuild(rightFarr, rightMarr);
  return node;
}

let fstr = '1,2,4,7,3,5,6,8'
let mstr = '4,7,2,1,5,3,8,6'

let root = rebuildTree(fstr, mstr);

console.log(root);