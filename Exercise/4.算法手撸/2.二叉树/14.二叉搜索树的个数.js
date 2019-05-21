// 给定n, 返回所有能存储1~n个数的不同结构二叉搜索树的个数
// d[0] = 1
// d[1] = 1 一个节点当然只有一种
// d[2] = d[1]*d[0] + d[0]*d[1] 两个节点，那么除去根节点，可以左子树一个节点或者右子树一个节点
// d[3] = d[2]*d[0] + d[1]*d[1] + d[0]*d[2] 
// 除去根节点，左子树两个节点，左右各一个，右子树两个节点
// d[n] = d[n-1]*d[0] + d[n-2]*d[1] ... + d[1]*d[n-1] + d[0]*d[n];

function getNum(n) {
  if (n <= 1) return 1;
  let res = [1, 1];
  for(let i = 2; i <= n; i++) {
    res[i] = 0;
    for(let j = 0; j <= i - 1; j++) {
      res[i] += res[i - 1- j] * res[j];
    }
  }
  return res[res.length - 1];
}

console.log(getNum(3))