// 直接在对象上定义一个新属性或者修改一个对象的现有属性，并返回这个对象

// Object.defineProperty(obj, prop, descriptor)

// 1. 属性描述符
// 1.1 描述符类型
// 对象目前存在两种属性描述符: 数据描述符或者存取描述符，数据描述符是一个具有值的属性，这个值可能是可写或者不可写的；存取描述符是 getter-setter 函数对描述的属性

// 1.2 两种描述符公有键值

// configurable: 为true 时，该描述符才可以被改变，或者这个属性才能被从对应对象删除，默认是 false
// enumerable: 为 true时，这个属性才会出现在对象的枚举属性中，默认为 false。如果需要属性可以被for...in 循环和 Object.keys()  呈现，需要这个为 true

// 1.3 数据描述符键值

// value: 该属性的值，默认为 undefined
// writable: 为 true 时，value 才可以被赋值运算符改变，默认为 false

// 1.4 存取描述符键值

// get: 给属性提供 getter 的方法
// set: 给属性提供 setter 的方法

// 上述的键值不一定是自身属性，也可能是继承来的，所以最好用 Object.create(null) 得来的对象来创建属性描述符

// example1 创建数据描述符

const descriptor = Object.create(null);
descriptor.value = 'static';

let obj = {}
obj = Object.defineProperty(obj, 'key', descriptor);

// static
console.log(obj.key);
obj.key = 2;
// static, 默认 writable: false
console.log(obj.key);

descriptor.writable = true;
obj = Object.defineProperty(obj, 'key2', descriptor);

// static
console.log(obj.key2);
obj.key2 = 2;
// 2
console.log(obj.key2);


Object.defineProperty(obj, 'key3', {
  enumerable: true,
  configurable: false,
  writable: false,
  value: "static"
});

// 只打印key3
// 因为其他两个属性不可枚举
for (let i in obj) {
  console.log(i);
}
// static
console.log(obj.key);
// 2
console.log(obj.key2);
// static
console.log(obj.key3);


// example 2 存取描述符
let bValue;
Object.defineProperty(obj, "b", {
  get : function(){
    return bValue;
  },
  set : function(newValue){
    bValue = newValue;
  },
  enumerable : true,
  configurable : true
});

obj.b = 123;
// 123
console.log(obj.b);
// 123
console.log(bValue);