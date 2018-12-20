function getRibbit(n) {
  if (n <= 0) return 0;
  let months = n * 12;
  let ribbits = [0, 2];
  let newRibbit = 0;
  for (let i = 2; i <= months; i++) {
    const ar = ribbits[i - 1] - newRibbit;
    ribbits.push(2 * ar + newRibbit);
    newRibbit = 2 * ar + newRibbit - ribbits[i - 1]
  }
  return ribbits.pop()
}

console.log(getRibbit(0.5))
console.log(getRibbit(1))
console.log(getRibbit(2))
console.log(getRibbit(3))
console.log(getRibbit(4))
console.log(getRibbit(5))