// 1. 对象的属性分类
// 对象属性分为自有属性 和 原型链属性
// 自有属性又分为 可枚举属性 和 不可枚举属性 和 Symbol 值属性

let obj = Object.create({ a: 1}, {
  b: {
    value: '2',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  c: {
    value: '3',
    writable: true,
    enumerable: false,
    configurable: true,
  },
  [Symbol.for('d')]: {
    value: '4',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  [Symbol.for('e')]: {
    value: '5',
    writable: true,
    enumerable: false,
    configurable: true,
  }
})

// 1.1 获取对象的自有可枚举属性的键与值
// [ 'b' ]
console.log(Object.keys(obj))
// [ 2 ]
console.log(Object.values(obj))
// [ ['b', 2] ]
console.log(Object.entries(obj))

// 1.2 获取对象的自由可枚举属性和不可枚举属性
// [ 'b', 'c' ]
console.log(Object.getOwnPropertyNames(obj));

// 1.3 获取对象的自有不可枚举属性
const all = Object.getOwnPropertyNames(obj)
const unEnum = [];
for (let key of all) {
  if (!obj.propertyIsEnumerable(key)) {
    unEnum.push(key);
  }
}
// [ 'c' ]
console.log(unEnum);

// 1.4 获取对象所有自有的 Symbol 值属性,不论是否可以枚举
// [ Symbol(d), Symbol(e) ]
console.log(Object.getOwnPropertySymbols(obj));

// 1.5 for...in 会获取对象的自有枚举属性 和 原型链属性
// b
// a
for (let i in obj) {
  console.log(i);
}

// 2. 对象的三种状态
// 不可拓展
// 密封
// 冻结
// 这三种状态是递进关系

// 不可拓展/密封/冻结: 不能添加新属性,不能改变__proto__
// 密封/冻结: 所有属性不可配置,因此不可删除属性
// 冻结: 所有数据属性(没有 getter setter 组建的访问器的属性)不可写

Object.preventExtensions()
Object.isExtensible()

Object.seal()
Object.isSealed()

Object.freeze()
Object.isFrozen();