function generateTrees(n) {
  if (n <= 0) return [];
  return generate(1, n);
}

function generate(start, end) {
  let ans = [];
  if (start > end) {
    ans.push(null);
    return ans;
  }
  if (start == end) {
    ans.push({ val: start, left: null, right: null });
    return ans;
  }
  for (let i = start; i <= end; i++) {
    let leftList = generate(start, i - 1);
    let rightList = generate(i + 1, end);
    for (let left of leftList) {
      for (let right of rightList) {
        let root = {val: i};
        root.left = left;
        root.right = right;
        ans.push(root);
      }
    }
  }
  return ans;
}

console.dir(generateTrees(3))