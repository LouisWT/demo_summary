// p 182
// 输入一个二叉树和一个整数，打印出二叉树中节点值的和为整数的所有路径。路径是指从根节点到叶子节点。

function FindPath(root, expectNumber) {
  if (!root) return [];
  const allPath = [];
  getpath(root, [], 0, expectNumber, allPath);
  // 对路径排序，这是牛客网的要求
  allPath.sort(function (path1, path2) {
    if (path1.length < path2.length) return 1;
    if (path1.length == path2.length) return 0;
    if (path1.length > path2.length) return -1;
  })
  return allPath;
}

// ** 缺点：每次传递path 时，用了扩散操作符，相当于将 path 复制到了新数组，每次递归都要复制一遍，这样有空间时间消耗
function getpath(node, path, sum, expect, allPath) {
  if (!node) return;
  let curSum = sum + node.val;
  // 1.总和小于期望，将当前节点加入搜索路径
  if (curSum < expect) {
    path.push(node.val);
  } 
  // 2. 总和等于期望，将当前节点加入搜索路径(因为之后的叶子节点有可能值为 0)
  else if (curSum == expect) {
    path.push(node.val);
    // 3. 如果当前节点是叶子节点，则加入成功的路径
    if (!node.left && !node.right) allPath.push(path);
  } else {
    return;
  }
  // 3. 向下搜索
  getpath(node.left, [...path], curSum, expect, allPath);
  getpath(node.right, [...path], curSum, expect, allPath);
}

// getpath 的第二种写法,也能通过测试，并且更好
// l57 l58 l60 传递时直接传递 path,但是在返回父节点前，将当前节点pop出去
// l52 在最后加入路径时使用扩散运算符，也就是说将那时候的 path 复制到新数组
function getpathNew(node, path, sum, expect, allPath) {
  if (!node) return;
  let curSum = sum + node.val;
  // 1.总和小于期望，将当前节点加入搜索路径
  if (curSum < expect) {
    path.push(node.val);
  } 
  // 2. 总和等于期望，将当前节点加入搜索路径(因为之后的叶子节点有可能值为 0)
  else if (curSum == expect) {
    path.push(node.val);
    // 3. 如果当前节点是叶子节点，则加入成功的路径
    if (!node.left && !node.right) allPath.push([...path]);
  } else {
    return;
  }
  // 3. 向下搜索
  getpath(node.left, path, curSum, expect, allPath);
  getpath(node.right, path, curSum, expect, allPath);
  // 4. 返回父节点之前，在路径上删除当前节点
  path.pop();
}

module.exports = {
  FindPath: FindPath
};