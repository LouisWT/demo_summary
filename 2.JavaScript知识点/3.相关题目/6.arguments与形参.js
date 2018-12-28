// 非严格模式下，arguments 的值和对应形参的值保持同步，比如在函数内部修改了 arguments[0] 后，第一个形参也会跟着改变
// 严格模式下，arguments 和对应形参不同步

var func = function(m, n) {
  arguments[0] = 1;
  arguments[1] = 2;
  m = 2;
  arguments[0] = 3
  return m + n;
}
// 5
console.log(func(1, 1));

func = function(m, n) {
  'use strict';
  arguments[0] = 1;
  arguments[1] = 2;
  m = 2;
  arguments[0] = 3
  return m + n;
}
// 3
console.log(func(1, 1));