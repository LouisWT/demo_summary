// 创建一个新对象，使用现有的对象来提供新创建对象的 __proto___
// Object.create(proto, [propertiesObject])

// 1. 创建一个最空的对象，即连原型都没有
let obj = Object.create(null);


// 2. 相当于常规方式声明一个对象
obj = Object.create(Object.prototype)
// 相当于 obj = {}

// 3. 创建对象的同时指定对象属性

obj = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { 
    writable:true,
    configurable:true,
    value: "hello" 
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});