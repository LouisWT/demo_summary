function currying(fn, ...args) {
  return fn.bind(null, args);
}

function curry(fn, ...args) {
  return function() {
    let innerArgs = Array.prototype.slice(arguments)
    fn.apply(null, args.concat(innerArgs))
  }
}

function sum(a, b) {
  console.log(Number(a) + Number(b));
}

currying(sum, 1)(2);