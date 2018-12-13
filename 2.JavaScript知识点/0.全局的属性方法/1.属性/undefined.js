// 一个变量声明了没赋值，就是 undefined

let x;

// 三个都会打印
// typeof 可以不会在一个变量没有被声明的时候抛出一个错误

if (x === undefined) {
  console.log(1);
}

if (typeof y === 'undefined') {
  console.log(2);
}

if (x === void 0) {
  console.log(3);
}