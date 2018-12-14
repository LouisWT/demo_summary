// 返回一个由指定对象所有自身属性的属性名(包括不可枚举属性和可枚举属性)
// (包括不可枚举属性，不包括Symbol值作为名称的属性) 组成的数组
// Object.getOwnPropertyNames(obj);

// example 1
const obj = Object.create({ a: 1}, {
  getFoo: {
    value: function() { return this.foo },
    enumerable: false,
  }
});

obj.foo = 1;

// 可以获取到不可枚举的 getFoo
// [ 'getFoo', 'foo' ]
console.log(Object.getOwnPropertyNames(obj))

// example 2
// 如果不想获取到不可枚举变量,可以使用 for...in 再用 hasOwnProperty过滤
// 或者使用 Object.keys()

// [ 'foo' ]
console.log(Object.keys(obj))

// foo
// a
for (let i in obj) {
  console.log(i);
}

// foo
for (let i in obj) {
  if (obj.hasOwnProperty(i)) {
    console.log(i);
  }
}

// example3 获取所有不可枚举属性
// 首先使用 Object.getOwnPropertyNames 获取所有属性,包括自身的枚举和不可枚举属性,
// 再使用 propertyIsEnumerable 查询这个属性是否可枚举,
// 最后就是不可枚举属性

