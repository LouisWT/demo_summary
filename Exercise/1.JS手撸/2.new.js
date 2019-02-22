// new Foo();
// 模拟方式是 create(Foo)

function create(Con, ...args) {
  let obj = Object.create(null);
  obj.__proto__ = Con.prototype;
  let result = Con.apply(this, args);
  return typeof result === 'object' ? result : obj; 
}