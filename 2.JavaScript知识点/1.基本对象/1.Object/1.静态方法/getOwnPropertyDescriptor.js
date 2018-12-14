// 返回指定对象上一个自有属性(直接赋予该对象的属性，不需要从原型链上查找)对应的属性描述符

// Object.getOwnProprtyDescriptor(obj, prop)

let obj = {}

let des = {
  get : function(){
    return bValue;
  },
  set : function(newValue){
    bValue = newValue;
  },
  enumerable : true,
  configurable : true
}
Object.defineProperty(obj, "b", des);

let des2 = Object.getOwnPropertyDescriptor(obj, 'b');

// { get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true }
console.log(des2);
// false
console.log(des2 === des);
// true
console.log(des2.get === des.get);