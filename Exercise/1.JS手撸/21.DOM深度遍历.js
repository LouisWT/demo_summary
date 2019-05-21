function dfs(node) {
  if (!node) return;
  console.log(node);
  let children = node.children;
  for (let child of children) {
    dfs(child);
  }
}