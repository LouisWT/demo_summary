// 递归
function printRight(node) {
  if (!node) return [];
  let res = [];
  print(node, 0, res);
  return res;
}

function print(node, level, res) {
  if (!node) return;
  res[level] = node.val;
  print(node.left, level + 1, res);
  print(node.right, level + 1, res);
}

function printRight2(node) {
  if (!node) return [];
  let res = [];
  let curr = 1;
  let next = 0;
  let quene = [node];
  while (quene.length > 0) {
    let node = quene.shift();
    curr--;
    if (node.left) {
      quene.push(node.left)
      next++;
    }
    if (node.right) {
      quene.push(node.right);
      next++;
    }
    if (curr == 0) {
      res.push(node.val);
      curr = next;
      next = 0;
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

console.log(printRight(tree))