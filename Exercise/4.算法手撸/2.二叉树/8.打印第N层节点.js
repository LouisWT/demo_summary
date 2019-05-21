function print(node, N) {
  if (!node || N <= 0) return;
  search(node, 1, N); 
}

function search(node, curr, N) {
  if (!node) return;
  if (curr == N) {
    console.log(node.val);
  } else {
    search(node.left, curr + 1, N);
    search(node.right, curr + 1, N);
  }
}