function judge(node) {
  if(!node) return true;
  let left = depth(node.left);
  let right = depth(node.right);
  if (Math.abs(left - right) <= 1) {
    return judge(node.left) && judge(node.right);
  } else {
    return false;
  }
}

function depth(node) {
  if (!node) return 0;
  return 1 + Math.max(depth(node.left), depth(node.right));
}

function isBalanced(root) {
  if (!root) return true;
  let depth = { val: 0 };
  return judge(root, depth);
};

function judge(root, depth) {
    if (!root) return true;
    let left = {val: 0};
    let right = {val: 0};
    if (judge(root.left, left) && judge(root.right, right)) {
        if (Math.abs(left.val - right.val) <= 1) {
            depth.val = 1 + Math.max(left.val, right.val);
            return true;
        }
    }
    return false;
}