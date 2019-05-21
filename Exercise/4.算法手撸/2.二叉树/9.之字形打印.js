function printTree(node) {
  if (!node) return [];
  // 奇数层节点
  let odd = [node];
  // 偶数层节点
  let even = [];
  // 结果
  let arr = [];
  print(odd, even, 1, arr);
  return arr;
}

function print(odd, even, level, arr) {
  if (odd.length === 0 && even.length === 0) return;
  // 根据奇数层还是偶数层，来取节点，并且Push子节点
  // 如果空了就进入下一层
  if (level % 2 === 1) {
    let node = odd.pop();
    if (!arr[level - 1]) arr[level - 1] = [];
    arr[level - 1].push(node.val);
    if (node.left) even.push(node.left);
    if (node.right) even.push(node.right);
    if (odd.length !== 0) {
      print(odd, even, level, arr);
    } else {
      print(odd, even, level + 1, arr);
    }
  } else {
    let node = even.pop();
    if (!arr[level - 1]) arr[level - 1] = [];
    arr[level - 1].push(node.val);
    if (node.right) odd.push(node.right);
    if (node.left) odd.push(node.left);
    if (even.length !== 0) {
      print(odd, even, level, arr);
    } else {
      print(odd, even, level + 1, arr);
    }
  }
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

console.log(printTree(tree))