function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function tailFib(n, prev = 1, next = 1) {
  if (n <= 2) return next;
  return tailFib(n - 1, next, next + prev);
}

console.time('f');
console.log(fib(40));
console.timeEnd('f');

console.time('tailf');
console.log(tailFib(40));
console.timeEnd('tailf');