function isSameTree(n1, n2) {
  if (!n1 && !n2) return true;
  if (!n1 || !n2) return false;
  if (n1.val !== n2.val) return false;
  return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right);
}