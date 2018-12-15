// 1. apply 与 call 
// apply, 在一个对象上下文中应用另一个对象的方法,参数能够以数组形式传入
// call, 在一个对象上下文中应用另一个对象的方法,参数能够以列表形式传入

// 2. bind
// bind 方法会创建一个新函数,称为绑定函数,绑定函数可以预先指定运行时的 this 和 部分参数

function list() {
  return Array.prototype.slice.call(arguments);
}

const list1 = list(1, 2, 3);
const partitalFunc = list.bind(undefined, 37);
const list2 = partitalFunc()
const list3 = partitalFunc(1, 2)

// [1, 2, 3]
console.log(list1)
// [37]
console.log(list2)
// [37, 1, 2]
console.log(list3)