function isSymmetric(n1, n2 = n1) {
  if (!n1 && !n2) return true;
  if (!n1 || !n2) return false;
  if (n1.val !== n2.val) return false;
  return isSymmetric(n1.left, n2.right) && isSymmetric(n1.right, n2.left);
}