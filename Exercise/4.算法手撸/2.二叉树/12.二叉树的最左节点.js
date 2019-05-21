// 打印二叉树每层第一个节点
function printTree(node) {
  if (!node) return;
  let maxLevel = 0;
  print(node);
  function print(node, level = 1) {
    if (!node) return;
    if (level > maxLevel) {
      console.log(node.val);
      maxLevel = level;
    }
    print(node.left, level + 1);
    print(node.right, level + 1);
  }
}


// 递归方式
function printLeft(node) {
  if (!node) return;
  let res = [];
  print(node, 0, res);
  return res;
}

function print(node, level, res) {
  if (!node) return;
  if (res[level] === undefined) res[level] = node.val;
  print(node.left, level + 1, res);
  print(node.right, level + 1, res);
}

function printLeft2(node) {
  if (!node) return [];
  let curr = 1;
  let next = 0;
  let quene = [node];
  let first = true;
  let res = [];
  while (quene.length > 0) {
    let node = quene.shift();
    curr--;
    if (first) {
      res.push(node.val);
      first = false;
    }
    if (node.left) {
      quene.push(node.left)
      next++;
    }
    if (node.right) {
      quene.push(node.right);
      next++;
    }
    if (curr == 0) {
      curr = next;
      next = 0;
      first = true;
    }
  }
  return res;
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


printTree(tree);

console.log(printLeft(tree))
console.log(printLeft2(tree))