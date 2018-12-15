// 构造函数 原型对象 实例对象之间的关系

// 1. 函数，使用 new 调用时变为构造函数
function Foo(a) {
  this.a = a;
}

// true
console.log(Foo.constructor === Function);
// false
console.log(Foo.constructor === Foo);
// true
console.log(Foo.constructor.prototype === Function.prototype);

// 1.1 函数 prototype 对象上的 constructor 指向这个函数
// true
console.log(Foo.prototype.constructor === Foo);
var o = {};
console.log(o.__proto__.constructor === Object); // true
o = new Object;
console.log(o.__proto__.constructor === Object); // true
a = [];
console.log(a.__proto__.constructor === Array); // true
a = new Array;
console.log(a.__proto__.constructor === Array) // true
var n = new Number(3);
console.log(n.__proto__.constructor === Number); // true

// 2. 实例对象
const foo = new Foo(1)

// true
console.log(foo.__proto__ === Foo.prototype)

// true
// 实际上 foo 没有 constructor属性，只是通过原型继承得到的 foo.__proto__.constructor === Foo
console.log(foo.constructor === Foo);
console.log(foo.__proto__.constructor === Foo);

// 3. 下面的例子验证了实例对象是不存在 constructor 属性的
Foo.prototype = { a: 1 }
const foo2 = new Foo(2);

// false
console.log(foo2.constructor === Foo);
// true 
// 因为它首先在自己的原型链上找 constructor，但是现在 Foo.prototype 上没这个属性了，所以就在原型链上继续往上找，就找到了 Object上的 constructor
console.log(foo2.constructor === Object);


// 总结：
// 每个函数都有一个 constructor 属性, 这个属性就是 Function, constructor.prototype === Function.prototype
// 函数的 prototype 上有一个 constructor 指向这个函数，感觉像是这个原型的标签吧
// 每个实例对象的 __proto__ 都指向函数的 prototype,实例对象上访问的 constructor 属性其实都是原型链的 constructor 属性 