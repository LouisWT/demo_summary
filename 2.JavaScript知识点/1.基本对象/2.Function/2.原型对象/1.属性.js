// 1. 函数的名称,和参数长度
function func() {}
function func1(x) {}
// func
console.log(func.name)
// func1
console.log(func1.name)
// 0
console.log(func.length)
// 1
console.log(func1.length)

// 简写方法名称
let o = {
  foo() {}
}
// foo
console.log(o.foo.name);

// bind 函数名称
// bound foo
function foo() {}
console.log(foo.bind({}).name);

// getters 和 setters 函数名
o = {
  get foo() {},
  set foo(x) {}
}
let des = Object.getOwnPropertyDescriptor(o, 'foo');
// get foo
console.log(des.get.name)
// set foo
console.log(des.set.name)