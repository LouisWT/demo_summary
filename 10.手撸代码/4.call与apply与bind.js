// call
Function.prototype.call = function(context, ...args) {
  context = context || window;
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;
}

// apply
Function.prototype.apply = function(context, args) {
  context = context || window;
  context.fn = this;
  var result;
  if (args) {
    result = context.fn(...args);
  } else {
    context.fn();
  }
  delete context.fn;
  return result;
}

// bind
Function.prototype.bind = function (context, ...args) {
  let _this = this;

  return function F(...inner) {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    // 原生的 bind 返回的函数没有 prototype
    // 创建的新对象是由被 bind 函数创建的
    // 这里体现了 new 的 this 绑定优先级高于 bind
    if (this instanceof F) {
      // 这样写是错误的，因为剩余参数必须只能在最右端出现一次
      // return new _this(...args, ...inner)
      return new _this(args.concat(inner))
    }
    return _this.apply(context, args.concat(...inner));
  }
}