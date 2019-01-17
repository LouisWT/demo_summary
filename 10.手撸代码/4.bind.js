Object.prototype.bind = function (context) {
  let _this = this;
  let args = [].slice.call(arguments, 1);

  return function() {
    return _this.apply(context, args);
  }
}