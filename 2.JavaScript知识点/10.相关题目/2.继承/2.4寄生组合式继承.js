function Parent(y) {
  this.y = y;
  this.a = [];
}

Parent.prototype.say = function() {
  console.log(this.y);
}

function Child(y) {
  this.z = 3;
  Parent.call(this, y);
}
// 使用Object.create() 替换掉直接的赋值
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.saya = function() {
  console.log(this.a);
}

let c1 = new Child(1);
let c2 = new Child(2);

// 1
c1.say();
// 2
c2.say();

c1.a.push('a');
// [ 'a' ]
c1.saya();
// []
c2.saya();

// true
console.log(c1 instanceof Object)
// true
console.log(c1 instanceof Parent)
// true
console.log(c1 instanceof Child)