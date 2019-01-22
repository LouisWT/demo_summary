function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype = {
  constructor: Person,
  sayName() {
    console.log(this.name);
  }
}

let person = new Person();

// 最常用的模式
// 既可以为每个实例初始化属性，也可以原型对象共享相同的方法，还可以通过 instanceof 来判断对象的类型