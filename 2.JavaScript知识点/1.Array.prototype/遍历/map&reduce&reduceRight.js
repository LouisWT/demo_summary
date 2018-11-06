// map 返回对每个元素应用回调函数的返回值的新数组
// reduce 对每个元素应用一个函数，将其简化为单一值

// arr.reduce(callback, initialValue)
// callback(累计值, 当前元素值, 当前索引值, 原数组)
// 累计值的初始值等于 initialValue
// 如果没有提供 initialValue，累计值将使用数组中的第一个元素

const chain1 = (next) => (action) => {
  console.log('before action1');
  const returnedvalue = next(action);
  console.log('after action1');
  return returnedvalue;
}

const chain2 = (next) => (action) => {
  console.log('before action2');
  const returnedvalue = next(action);
  console.log('after action2');
  return returnedvalue;
}

const func = [chain1, chain2];

const newFunc = func.reduce((a, b) => {
  return function () {
      console.log(arguments);
      return a(b.apply(undefined, arguments))
  }
})

const dispatch = (action) => {
  console.log(action);
  console.log('this is dispatch');
  return 'final result'
}

const lastFunc = newFunc(dispatch)

console.log(lastFunc({ type: 'some action' }));