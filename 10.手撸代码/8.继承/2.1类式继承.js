// https://juejin.im/entry/58dfbe0361ff4b006b166388

// 1. 原型继承

function Parent(y) {
  this.x = 1;
  this.y = y;
  this.a = [];
}

Parent.prototype.say = function() {
  console.log(this.x);
}

function Child() {
  this.z = 3;
}

Child.prototype = new Parent();

Child.prototype.sayz = function() {
  console.log(this.z);
}

let c = new Child();

// Parent { z: 3 }
console.dir(c);
// 1
c.say()
// 3
c.sayz()
// true
console.log(c instanceof Object)
// true
console.log(c instanceof Parent)
// true
console.log(c instanceof Child)

// 原理：
// 通过改写原型链，将子类的原型连接到父类的实例对象，这样在子类对象中找不到属性时，会通过原型链找到父类的实例对象中的属性

// 类式继承的问题
// 1. 某个子类对象修改父类的引用类型(非重写操作)后，会在所有子类对象中体现出来
c.a.push('a');
const d = new Child();
// [ 'a' ]
console.log(d.a);

// 修改非引用类型不会有这个问题，因为它会直接在子类对象上新建一个新属性
// { z: 3 }
console.log(c);
c.x = 10;
// { z: 3, x: 10 }
console.log(c);

// 这是因为原型属性只能访问，不能修改，但是对引用类型的原型属性，比如数组，如果只是添加或者修改删除元素，那么引用还是不会变的，导致原型属性被修改

// 2. 无法为不同的子类对象初始化继承来的属性