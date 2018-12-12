// p269
// 给一棵二叉搜索树(每个节点的左子节点小于父节点，右子节点大于父节点)，找出其中第 k 小的节点。

let root = {
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
    }
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
    }
  },
}

function findKNumber(root, k) {
  if (!root || k < 1) return null;
  const temp = new Array();
  // 用于存储中序遍历结果
  middleSearch(root, temp, k);
  return temp[k - 1];
}

function middleSearch(node, temp, k) {
  if (node.left) {
    middleSearch(node.left, temp, k);
  }
  temp.push(node)
  if (temp.length >= k) {
    return;
  }
  if (node.right) {
    middleSearch(node.right, temp, k);
  }
}

findKNumber(root, 3);

function newFindNumber(root, k) {
  if (!root || k < 1) return null;
  // 传递引用而不是值，保证改动 k 后在之后的递归中可以体现出来
  let hk = { k };
  return newMiddleSearch(root, hk);
}

function newMiddleSearch(node, hk) {
  let target = null;
  if (node.left) {
    target = newMiddleSearch(node.left, hk);
  }
  if (target === null) {
    if (hk.k === 1) {
      target = node;
    }
    hk.k--;
  }
  // 没这个就会覆盖之前的结果了
  if (target === null && node.right) {
    target = newMiddleSearch(node.right, hk);
  }
  return target;
}