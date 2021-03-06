// 提升：变量和函数的声明从它们在代码中出现的位置被移动到了最上面，这个过程叫提升
// 函数声明会提升，但是函数表达式不会被提升

foo(); // 1

var foo = 2;

function foo() {
  console.log(1);
}

foo = function() {
  console.log(2);
}

// 上述代码引擎是按下面方法解析的

// 1. 函数声明被提升到最上，如果有同名的函数声明，那么之后的会覆盖之前的
// function foo() {
//   console.log(1);
// }

// 2. 变量声明由于是重复声明，所以被忽略

// foo();

// 3. 函数表达式不会被提升
// foo = function() {
//   console.log(2);
// }


// 变量声明如果与函数声明重复会被忽略，函数声明如果与函数声明重复，那么后面的会覆盖前面的
