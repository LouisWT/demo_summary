// 使用中序序列和后序序列重建二叉树

function rebuild(mArr, bArr) {
  if (mArr.length == 0 || bArr.length == 0) return null;
  let node = {};
  let val = bArr[bArr.length - 1];
  node.val = val;
  let index = mArr.indexOf(val);
  let leftMarr = mArr.slice(0, index);
  let rightMarr = mArr.slice(index + 1);
  let leftBarr = bArr.slice(0, leftMarr.length);
  let rightBarr = bArr.slice(leftMarr.length, bArr.length - 1);
  node.left = rebuild(leftMarr, leftBarr);
  node.right = rebuild(rightMarr, rightBarr);
  return node;
}

let mArr = 'EDGBEAC';
let bArr = 'FGDEBCA';

let root = rebuild(mArr.split(''), bArr.split(''));

console.log(root);