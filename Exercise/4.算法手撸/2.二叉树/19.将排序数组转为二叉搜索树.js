// 将排序数组转为二叉搜索树
function sortedArrayToBST(arr, lo = 0, hi = arr.length - 1) {
  if (!arr || lo > hi) return null;
  let mid = Math.floor((lo + hi) / 2);
  let node = { val: arr[mid] };
  node.left = sortedArrayToBST(arr, lo, mid-1);
  node.right = sortedArrayToBST(arr, mid+1, hi);
  return node;
}