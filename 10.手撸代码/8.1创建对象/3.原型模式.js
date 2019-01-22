function Person() {
}

Person.prototype.name = 'Fred';

Person.prototype.age = 23;

Person.prototype.job = 'Engineer';

Person.prototype.sayName = function () {
  console.log(this.name);
}

let person = new Person();

// 优点：可以共享属性
// 缺点：无法为每个实例初始化属性；对于原型对象中引用类型的属性，如果对它的操作是非重写操作，那么会影响到所有实例