// 前序遍历和后序遍历不能唯一确定一棵树
// 但是如果树只存在度为 0 和 2 的节点，那么可以根据它的前序遍历和后序遍历重建树，否则不能(即存在度为 1 的节点)
// 对度为1的节点，主要问题在于不知道子节点是左孩子还是右孩子
// https://blog.csdn.net/GYQJN/article/details/52709912

// 与前序中序的重建过程类似
function rebuildTree(fArr, bArr) {
  if (fArr.length == 0 || bArr.length == 0) return null;
  let node = {};
  let val = fArr[0];
  node.val = val;
  let leftRoot = fArr[1];
  // 如果左节点存在，事实上如果有子节点就都先当做左孩子，如果没有右孩子会报错
  if (leftRoot) {
    let index = bArr.indexOf(leftRoot);
    let leftBarr = bArr.slice(0, index + 1);
    let rightBarr = bArr.slice(index + 1, bArr.length - 1);
    if (rightBarr.length == 0) {
      throw new Error('存在度为 1 的节点，无法确定');
    }
    let leftFarr = fArr.slice(1, 1 + leftBarr.length);
    let rightFarr = fArr.slice(1 + leftBarr.length);
    node.left = rebuildTree(leftFarr, leftBarr);
    node.right = rebuildTree(rightFarr, rightBarr);
    return node;
  }
  // 只有一个节点的情况
  return node;
}

let fArr = 'ABDFGEC';
let bArr = 'FGDEBCA';

let root = rebuildTree(fArr.split(''), bArr.split(''));

console.log(root);

fArr = 'ABDFGE';
bArr = 'FGDEBA';

root = rebuildTree(fArr.split(''), bArr.split(''));

console.log(root);