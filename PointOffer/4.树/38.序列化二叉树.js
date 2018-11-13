// p 196 ** 
// 反序列化
// 序列化和反序列化二叉树

// 用前序遍历和中序遍历构造二叉树的缺点：1.树中不能有重复的值 2. 只有当两个序列中所有数据都读出后才能开始反序列化

// 使用带特殊字符的前序遍历序列来实现
const arr = [];
function Serialize(pRoot) {
  if (!pRoot) return [];
  frontSearch(pRoot);
}

function frontSearch(node) {
  if (!node) {
    arr.push('#');
    return;
  }
  arr.push(node.val);
  frontSearch(node.left);
  frontSearch(node.right);
}

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// 反序列化的逻辑要看明白！！！！
function Deserialize() {
  if (arr.length == 0) return null;
  const val = arr.shift();
  let node = null;
  if (val != '#') {
    node = new TreeNode(val);
    node.left = Deserialize();
    node.right = Deserialize();
  }
  return node;
}

module.exports = {
  Serialize: Serialize,
  Deserialize: Deserialize
};