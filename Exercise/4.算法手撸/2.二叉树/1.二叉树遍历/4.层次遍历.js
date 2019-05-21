// 每层输出在不同行
function levelPrint2(node) {
  if (!node) return [];
  // 这层的节点数
  let curr = 1;
  // 下层的节点数
  let next = 0;
  let quene = [node];
  let level = [];
  let res = [];
  while (quene.length > 0) {
    let node = quene.shift();
    level.push(node.val);
    curr--;
    if (node.left) {
      quene.push(node.left);
      next++;
    }
    if (node.right) {
      quene.push(node.right);
      next++;
    }
    if (curr == 0) {
      res.push(level);
      level = [];
      curr = next;
      next = 0;
    }
  }
  return res;
}

// 递归版本，如果是要直接打印结果的话，那么这个方法的空间复杂度比非递归版本要大
// 如果是要返回数组的话，这个方法空间复杂度是树的深度
function levelOrder(node) {
  if (!node) return [];
  let res = [];
  print(node, res, 0);
  return res;
}
function print(node, res, level = 0) {
  if (!node) return;
  if (!res[level]) res[level] = [];
  res[level].push(node.val);
  print(node.left, res, level + 1);
  print(node.right, res, level + 1);
}

// 输出二叉树的某一行
function printNLevel(node, N, level = 1) {
  if (!node) return;
  if (level === N) {
    console.log(node.val);
  }
  printNLevel(node.left, N, level + 1);
  printNLevel(node.right, N, level + 1);
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

levelPrint2(tree);
printNLevel(tree, 3);
console.log(levelOrder(tree))