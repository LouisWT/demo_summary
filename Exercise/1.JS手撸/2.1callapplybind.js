Function.prototype.call = function (context, ...args) {
  let fn = this;
  context.fn = fn;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

Function.prototype.apply = function (context, args) {
  let fn = this;
  context.fn = fn;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

Function.prototype.bind = function (context, ...args) {
  let fn = this;
  return function F(...inner) {
    if (this instanceof F) {
      return new fn(...args.concat(inner));
    }
    return fn.apply(context, args.concat(inner));
  }
}