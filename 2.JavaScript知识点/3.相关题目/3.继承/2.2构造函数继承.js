// 2. call 继承
function Parent(x) {
	this.x = x;
	this.y = 100;
  this.z = [];
}

Parent.prototype.say = function() {
  console.log(this.x);
}
 
function Child(x) {
	this.d = 100;
	Parent.call(this, x);
}

Child.prototype.sayz = function () {
  console.log(this.z);
}

let c1 = new Child(1);
let c2 = new Child(2);

// 1
console.log(c1.x)
// 2
console.log(c2.x)

c1.z.push('a');

// [ 'a' ]
c1.sayz();
// []
c2.sayz();

// true
console.log(c1 instanceof Object)
// false
console.log(c1 instanceof Parent)
// true
console.log(c1 instanceof Child)

// TypeError: c1.say is not a function
c1.say();

// 原理: 通过调用 Parent.call，使得每个子类对象中都有一份父类属性，这样在访问属性时，会优先访问子类属性，不会访问原型链上的属性

// 优点：
// 解决了类式继承的两个问题, 可以为子类对象初始化不同的继承属性；可以改变父类的引用属性而不影响其他子类对象

// 缺点：
// 无法使用父类的方法，也就是父类的 prototype 上的方法
// 子类对象不是父类的实例