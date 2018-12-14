// 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
// Object.assign(target, ...sources)
// 这是浅拷贝

// 1. 源对象的属性值会覆盖同名目标属性的属性值
const obj1 = {
  a: 1,
  b: 2,
  c: 3
};
const obj = {c: 4, d: 5};

const obj2 = Object.assign(obj, obj1);

console.log(obj); // Object { c: 3, d: 5, a: 1, b: 2 }
console.log(obj2); // Object { c: 3, d: 5, a: 1, b: 2 }
console.log(obj === obj2); // true

// 2. 可以拷贝 symbol 类型的属性

console.log(Object.assign(obj, { [Symbol.for('foo')]: 'bar' }))
// { c: 3, d: 5, a: 1, b: 2, [Symbol(foo)]: 'bar' }
console.log(Object.assign(obj, { [Symbol.for('foo')]: 'bar' })[Symbol.for('foo')])
// bar

// 3.继承属性和不可枚举属性是不能拷贝的
const obj3 = Object.create({foo: 1}, { // foo 是个原型属性。
  bar: {
    value: 2,  // bar 是个不可枚举属性。
    enumerable: false
  },
  baz: {
    value: 3,
    enumerable: true  // baz 是个自身可枚举属性。
  }
});

console.log(Object.assign(obj, obj3));
// { c: 3, d: 5, a: 1, b: 2, baz: 3, [Symbol(foo)]: 'bar' }