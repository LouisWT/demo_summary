function currying(fn) {
  let args = [].slice.call(arguments, 1);
  return fn.bind(null, args);
}

function currying(fn) {
  let args = [].slice.call(arguments, 1);
  return function() {
    var _args = args.concat([].slice.call(arguments));
    return fn.apply(null, _args);
  }
}

function sum(a, b) {
  console.log(a + b);
}

currying(sum, 1)(2);