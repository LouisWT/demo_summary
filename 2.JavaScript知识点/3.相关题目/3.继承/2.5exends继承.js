class Parent {
  constructor(y) {
    this.y = y;
    this.x = 1;
    this.z = [];
  }

  say() {
    console.log(this.y);
  }

  sayz() {
    console.log(this.z);
  }
}

class Child extends Parent {
  // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
  // 如果没特意声明 constructor方法，那么也不用加这个，会默认调用的
  constructor(y) {
    super(y);
  }
}

let c1 = new Child(1);
let c2 = new Child(2);

// 1
c1.say();
// 2
c2.say();

c1.z.push('a');
// [ 'a' ]
c1.sayz();
// []
c2.sayz();

// true
console.log(c1 instanceof Object)
// true
console.log(c1 instanceof Parent)
// true
console.log(c1 instanceof Child)