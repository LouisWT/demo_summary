function getSum(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let prev1 = l1;
  let prev2 = l2;
  let tail = null;
  let up = 0;
  // 将两个列表中长度相同的部分先相加
  while (prev1 && prev2) {
    let v = prev1.val + prev2.val + up;
    up = Math.floor(v / 10);
    v = v % 10;
    prev1.val = v;
    tail = prev1;
    prev1 = prev1.next;
    prev2 = prev2.next;
  }
  // l1 比较长
  if (prev1) {
    while (prev1) {
      let v = prev1.val + up;
      up = Math.floor(v / 10);
      v = v % 10;
      tail = prev1;
      prev1.val = v;
      prev1 = prev1.next;
    }
  }
  // 列表2 比较长
  if (prev2) {
    // tail还指向列表1的尾巴，要连接过来
    tail.next = prev2;
    while (prev2) {
      let v = prev2.val + up;
      up = Math.floor(v / 10);
      v = v % 10;
      tail = prev2;
      prev2.val = v;
      prev2 = prev2.next;
    }
  }
  // 还有最高位的进位
  if (up !== 0) {
    tail.next = {
      val: up,
      next: null,
    }
  }
  return l1;
}

let a = {
  val: 1,
  next: null,
}

let b = {
  val: 9,
  next: {
    val: 9,
    next: null,
  }
}

console.dir(getSum(a, b));