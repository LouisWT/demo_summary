function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  }
}

let person = new Person('Fred', 23, 'Student')

// 优点：可以使用 instanceof 来检查对象的类型
// 缺点：不同实例上的同名函数实际上是不同的，每创建一个对象，都会新创建一个新函数