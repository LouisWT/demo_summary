function getSum(node) {
  if (!node) return [];
  let res = [];
  let curr = 0;
  sum(node, curr, res);
  return res;
}

function sum(node, curr, res) {
  if (!node) return;
  curr += node.val;
  if (!node.left && !node.right) {
    res.push(curr);
    return;
  }
  sum(node.left, curr, res);
  sum(node.right, curr, res);
}

// 所有路径和
function sumNumbers(root) {
  if(!root) return 0;
  let res = [];
  check(root, [], res);
  return res.reduce((a,b) => a + b)
};

function check(root, path, res) {
  if (!root) return;
  path.push(root.val);
  if (!root.left && !root.right) {
    res.push(parseInt(path.join('')));
    path.pop();
    return;
  }
  check(root.left, path, res);
  check(root.right, path, res);
  path.pop();
}

// 所有根节点到叶子节点的路径
function binaryTreePaths(root) {
  if (!root) return [];
  let res = [];
  getPath(root, [], res);
  return res;
};

function getPath(node, path, res) {
  if (!node) return;
  path.push(node.val);
  if (!node.left && !node.right) {
      res.push(path.join('->'));
      path.pop();
      return;
  }
  getPath(node.left, path, res);
  getPath(node.right, path, res);
  path.pop();
}

const tree = {
  val: 8,
  left: {
      val: 6,
      left: {
          val: 5,
          left: null,
          right: null,
      },
      right: {
          val: 7,
          left: null,
          right: null,
      },
  },
  right: {
      val: 10,
      left: {
          val: 9,
          left: null,
          right: null,
      },
      right: {
          val: 11,
          left: null,
          right: null,
      },
  },
}

console.log(sumNumbers(tree));
console.log(binaryTreePaths(tree))