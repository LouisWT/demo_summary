function ReverseTree(node) {
  if (!node) return null;
  let tmp = node.left;
  node.left = ReverseTree(node.right);
  node.right = ReverseTree(tmp);
  return node;
}

function ReverseTree3(node) { 
  if (!node) return null;
  let tmp = node.left;
  node.left = node.right;
  node.right = tmp;
  ReverseTree(node.left);
  ReverseTree(node.right);
  return node;
}

function ReverseTree2(node) {
  if (!node) return null;
  let quene = [node];
  while(quene.length > 0) {
    let node = quene.shift();
    let temp = node.left;
    node.left = node.right;
    node.right =  temp;
    if (node.left) quene.push(node.left);
    if (node.right) quene.push(node.right);
  }
  return node;
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
