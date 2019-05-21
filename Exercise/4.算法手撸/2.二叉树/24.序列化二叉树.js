// 基于前序遍历，需要用 # 来代表叶子节点的null子节点
var serialize = function (root) {
  if (!root) return '';
  let path = [];
  convert(root, path);
  return path.join(',')
};

function convert(root, path) {
  if (!root) return path.push('#');
  else {
    path.push(root.val);
    convert(root.left, path);
    convert(root.right, path);
  }
}

var deserialize = function (data) {
  if (!data) return null;
  let arr = data.split(',');
  return construct(arr);
};

function construct(arr) {
  if (arr.length == 0) return;
  let val = arr.shift();
  if (val === '#') {
    return null;
  } else {
    let root = { val };
    root.left = construct(arr);
    root.right = construct(arr);
    return root;
  }
}