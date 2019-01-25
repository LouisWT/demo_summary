// 闭包：当函数可以记住并访问所在的词法作用域，就产生了闭包，即使函数是在当前词法作用域之外运行

// 实例1
function foo() {
  let a = 1;
  function bar() {
    return a;
  }
  return bar;
}

let baz = foo();

// 1
console.log(baz());

// 实例2
for(var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000)
  })(i)
}