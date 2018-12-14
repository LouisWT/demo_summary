// 冻结一个对象
// 这个对象不能添加属性, 不能修改已有属性的值，不能删除已有属性，不能修改对象的可枚举性，可配置性，可写性

var obj = {
  prop: function() {},
  foo: 'bar'
};

Object.freeze(obj);

// true
console.log(Object.isFrozen(obj));

// 静默地不做任何事
obj.foo = 'quux'; 
// 静默地不做任何事
obj.quaxxor = 'the friendly duck';

// { prop: [Function: prop], foo: 'bar' }
console.log(obj);

// TypeError, Cannot define property ohai
Object.defineProperty(obj, 'ohai', { value: 17 });

// TypeError: #<Object> is not extensible
Object.setPrototypeOf(obj, { x: 20 });

